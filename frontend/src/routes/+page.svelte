<script>
	import { Toaster } from 'svelte-french-toast';
	import { transcriptions, uploadProgress, storeToken, storeUid } from '$lib/stores';
	import { browser, dev } from '$app/environment';
	import { CLIENT_WS_HOST } from '$lib/utils';
	import { onMount, onDestroy } from 'svelte';
	import ModalTranscriptionForm from '$lib/components/ModalTranscriptionForm.svelte';
	import ModalDownloadOptions from '$lib/components/ModalDownloadOptions.svelte';
	import ModalTranslationForm from '$lib/components/ModalTranslationForm.svelte';
	import SuccessTranscription from '$lib/components/SuccessTranscription.svelte';
	import PendingTranscription from '$lib/components/PendingTranscription.svelte';
	import PendingTranslation from '$lib/components/PendingTranslation.svelte';
	import ErrorTranscription from '$lib/components/ErrorTranscription.svelte';
	import { getAnalytics } from "firebase/analytics";
	import { env } from '$env/dynamic/public';
	console.log("🚀 ~ getAnalytics:", JSON.stringify(getAnalytics))
	import {  initializeApp } from 'firebase/app';
	// 王东胜
	const firebaseConfig = {
		apiKey: "AIzaSyAkeHxQmWjl_WtDjgB3Cl2023kOMXyMvE0",
		authDomain: "wdstest-b993c.firebaseapp.com",
		projectId: "wdstest-b993c",
		storageBucket: "wdstest-b993c.appspot.com",
		messagingSenderId: "1098774754266",
		appId: "1:1098774754266:web:21585cd2beaffe2ef006e3",
		measurementId: "G-YP4Q79DK05"
	};
		// 黄
	// const firebaseConfig = {
	// 	apiKey: "AIzaSyBna76EYazWkdl4TTU3Ne2BtwxGMzQQhfQ",
	// 	authDomain: "whishper-0302.firebaseapp.com",
	// 	projectId: "whishper-0302",
	// 	storageBucket: "whishper-0302.appspot.com",
	// 	messagingSenderId: "1099416120829",
	// 	appId: "1:1099416120829:web:d803709cc1a8b2d25bbd94",
	// 	measurementId: "G-4VE8PLHC3R"
	// };
	// 初始化 Firebase
	const app = initializeApp(firebaseConfig);
	// const analytics = getAnalytics(app);
	// console.log("🚀 ~ analytics:", analytics)
	//创建 Google 提供方对象实例(signInWithPopup,signInWithRedirect使用弹窗或者使用从定向)
	import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
	console.log("🚀 ~ signInWithPopup:", signInWithPopup)
	const auth = getAuth();
	console.log("🚀 ~ auth:", auth)
	const provider = new GoogleAuthProvider();
	console.log("🚀 ~ provider:", provider)
console.log(666666666666)
	//export let data;
	let socket;
	export let data;

	function connect() {
		if (!browser) {
			console.log('Server, not connecting');
			return;
		}

		let new_uri = '';
		var loc = window.location;
		if (loc.protocol === 'https:') {
			new_uri = 'wss:';
		} else {
			new_uri = 'ws:';
		}
		new_uri += '//' + (CLIENT_WS_HOST == '' ? loc.host : CLIENT_WS_HOST);
		new_uri += `/ws/transcriptions?uid=${$storeUid}`;
		console.log('Connecting to: ', new_uri);
		socket = new WebSocket(new_uri);

		socket.onopen = () => console.log('WebSocket is connected...');
		socket.onerror = (error) => console.log('WebSocket Error: ', error);
		socket.onclose = (event) => {
			console.log('WebSocket is closed with code: ', event.code, ' and reason: ', event.reason);
			setTimeout(() => {
				console.log('Reconnecting...');
				connect();
			}, 1000);
		};

		socket.onmessage = (event) => {
            let update = JSON.parse(event.data);
            // use update to update the store
            transcriptions.update(transcriptions => {
                let index = transcriptions.findIndex(tr => tr.id === update.id);
                if (index >= 0) {
                    // replace the item at index
                    transcriptions[index] = update;
                } else {
                    // add the new item
                    transcriptions.push(update);
                }
                return transcriptions; // return a new object to trigger reactivity
            });
        };
	}

	onMount(() => {
		console.log($storeUid, 'storeUid')
		if ($storeUid) {
			connect();
		}
		
	});

	let downloadTranscription = null;
	let handleDownload = (event) => {
		downloadTranscription = event.detail; // this will be the transcription to download
		modalDownloadOptions.showModal(); // show the modal
	};
	let translateTranscription = null;
	let handleTranslate = (event) => {
		translateTranscription = event.detail; // this will be the transcription to translate
		modalTranslation.showModal(); // show the modal
	};

	let googleLogin = (type) => {
      // this.authType = type;
      signInWithPopup(auth, provider)
      .then((result) => {
          console.log("获取到的登陆信息:", result)
					//result有用户的信息，根据后端要求拿需要的，如果是弹窗,授权成功会自动关闭弹窗
              //这里处理你需要的逻辑
							storeUid.set(result.user.uid)
					const data = {
											"email": result.user.email,
											"userId": result.user.uid,
											"googleUserId": result.user.providerData[0].uid,
							}
							console.log("接口请求入参", data, env)

							// TODO
							// token = result.user.uid;
							// storeToken.set(result.user.uid)
							

							fetch(`${env.PUBLIC_TRANSLATION_API_HOST}/api/login`,{
									method:'POST',
									body:JSON.stringify(data),
									headers: {
										'Content-Type': 'application/json'
									}
							})	
							.then(response => response.json())
							.then(data => {
								if(data.code === '200' || data.code === 200) {
									localStorage.setItem('token', data.data.token)
									storeToken.set(data.data.token)
									console.log(data, '获取到的token数据')
									connect();
								} else {
									storeToken.set('')
								}
							}).catch(() => {
								storeToken.set('')
							});
      })
      .catch((error) => {
        //可处理授权失败后的逻辑
        console.log(error, '错误信息');
      });
    }

	onDestroy(() => {
		if (socket) {
			socket.close(1000);
		}
	});

	console.log("🚀 ~ x:", storeToken)
</script>
{#if $storeToken}
	
	<Toaster />
	<ModalDownloadOptions tr={downloadTranscription} />
	<ModalTranslationForm tr={translateTranscription} />
	<ModalTranscriptionForm />

	<header>
		<h1 class="flex items-center justify-center mt-8 space-x-4 text-4xl font-bold">
			<span>
				<img class="w-20 h-20" src="/logo.svg" alt="Logo: a cloud whispering" />
			</span>
			<span> Whishper </span>
		</h1>
		<h2 class="font-mono text-center text-md opacity-70">{data.randomSentence}</h2>
	</header>
	

	<main class="w-4/6 mx-auto mt-4 mb-8 card bg-neutral text-neutral-content">
		
		{#if $uploadProgress > 0}
			<div class="flex flex-col items-center justify-center px-4 pt-4 my-4">
				<progress class="w-full mx-2 progress progress-success" value="{$uploadProgress}" max="100"></progress>
				<span>Uploading...</span>
			</div>
		{:else}
			<button
				class="max-w-md mx-auto mt-8 btn btn-primary btn-md"
				onclick="modalNewTranscription.showModal()">✨ new transcription</button
			>
		{/if}
		<div class="items-center mb-0 text-center card-body">
			{#if $transcriptions.length > 0}
				{#each $transcriptions.slice().reverse() as tr (tr.id)}
					{#if tr.status == 2}
						<SuccessTranscription {tr} on:download={handleDownload} on:translate={handleTranslate} />
					{/if}
					{#if tr.status < 2 && tr.status >= 0}
						<PendingTranscription {tr} />
					{/if}
					{#if tr.status == 3}
						<PendingTranslation {tr} />
					{/if}
					{#if tr.status < 0}
						<ErrorTranscription {tr} />
					{/if}
				{/each}
			{:else}
				<p class="text-2xl font-bold text-center">🔮 No transcriptions yet 🔮</p>
			{/if}
		</div>
	</main>
{:else}
<div class="flex text-center w-full justify-center">
	
	<button class="border border-[#999] p-x-5 p-y-2" style="padding: 8px 15px; height:auto;margin-top: 250px;" on:click={googleLogin}>
		<img class="w-20 h-20" src="/google-logo-icon-sign-in.svg" alt="Logo: a cloud whispering" style="display: inline-block;width:18px;height:18px;vertical-align:middle;margin-right: 10px;" />
		<span style="vertical-align: middle;">Sign In with Google</span>
	</button>
</div>
{/if}

