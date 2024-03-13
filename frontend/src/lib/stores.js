/*
 * @Author: wds
 * @Date: 2024-03-06 21:09:09
 * @LastEditors: wds
 * @LastEditTime: 2024-03-13 22:17:12
 */
import { writable } from 'svelte/store';

// contains all transcriptions
export const transcriptions = writable([
    {
        "id": "65eb2e5e3cf302abb2808dd8",
        "userId": "HLVXZcpb2UYzhX5SNT9w9wBdegw2",
        "status": 2,
        "startTime": 1709911646931116500,
        "endTime": 1709911669853547300,
        "language": "auto",
        "modelSize": "small",
        "task": "transcribe",
        "device": "cpu",
        "fileName": "65eb2e5e3cf302abb2808dd8_WHSHPR_BBC_News_",
        "sourceUrl": "https://youtu.be/3ehTFR6UAtg",
        "result": {
            "language": "zh",
            "duration": 191.8896875,
            "segments": [
                {
                    "end": 2.28,
                    "id": "381e5af0522048ba81871a3660c4a5ba",
                    "start": 0,
                    "score": 0.7,
                    "text": "Hi, a question from Reuters.",
                    "words": [
                        {
                            "end": 0.84,
                            "start": 0,
                            "word": "Hi,",
                            "score": 0.02
                        },
                        {
                            "end": 1.28,
                            "start": 1.14,
                            "word": " a",
                            "score": 0.67
                        },
                        {
                            "end": 1.52,
                            "start": 1.28,
                            "word": " question",
                            "score": 1
                        },
                        {
                            "end": 1.84,
                            "start": 1.52,
                            "word": " from",
                            "score": 0.97
                        },
                        {
                            "end": 2.08,
                            "start": 1.84,
                            "word": " Re",
                            "score": 0.91
                        },
                        {
                            "end": 2.28,
                            "start": 2.08,
                            "word": "uters.",
                            "score": 0.98
                        }
                    ]
                },
                {
                    "end": 8.66,
                    "id": "98ead4b7bbf74b8ca7a80624b4510c1f",
                    "start": 3.2,
                    "score": 0.7,
                    "text": "Why was Qin Gang removed from his post of foreign minister?",
                    "words": [
                        {
                            "end": 3.68,
                            "start": 3.2,
                            "word": "Why",
                            "score": 0.85
                        },
                        {
                            "end": 3.92,
                            "start": 3.68,
                            "word": " was",
                            "score": 0.97
                        },
                        {
                            "end": 4.18,
                            "start": 3.92,
                            "word": " Qin",
                            "score": 0.23
                        },
                        {
                            "end": 4.56,
                            "start": 4.18,
                            "word": " Gang",
                            "score": 0.72
                        },
                        {
                            "end": 5.24,
                            "start": 4.56,
                            "word": " removed",
                            "score": 0.97
                        },
                        {
                            "end": 5.72,
                            "start": 5.24,
                            "word": " from",
                            "score": 0.97
                        },
                        {
                            "end": 6.26,
                            "start": 5.72,
                            "word": " his",
                            "score": 0.99
                        },
                        {
                            "end": 6.86,
                            "start": 6.26,
                            "word": " post",
                            "score": 0.95
                        },
                        {
                            "end": 7.76,
                            "start": 6.86,
                            "word": " of",
                            "score": 0.91
                        },
                        {
                            "end": 8.22,
                            "start": 7.76,
                            "word": " foreign",
                            "score": 0.61
                        },
                        {
                            "end": 8.66,
                            "start": 8.22,
                            "word": " minister?",
                            "score": 0.96
                        }
                    ]
                },
                {
                    "end": 14.32,
                    "id": "aaa7a1f3994e4ba485a4fa0e1e0baaf8",
                    "start": 10.98,
                    "score": 0.7,
                    "text": "這個問題新華社已經發佈了消息,你可以查閱",
                    "words": [
                        {
                            "end": 11.3,
                            "start": 10.98,
                            "word": "這個",
                            "score": 0.51
                        },
                        {
                            "end": 11.66,
                            "start": 11.3,
                            "word": "問題",
                            "score": 1
                        },
                        {
                            "end": 12,
                            "start": 11.66,
                            "word": "新",
                            "score": 0.55
                        },
                        {
                            "end": 12.14,
                            "start": 12,
                            "word": "華",
                            "score": 1
                        },
                        {
                            "end": 12.32,
                            "start": 12.14,
                            "word": "社",
                            "score": 1
                        },
                        {
                            "end": 12.56,
                            "start": 12.32,
                            "word": "已經",
                            "score": 0.96
                        },
                        {
                            "end": 12.76,
                            "start": 12.56,
                            "word": "發",
                            "score": 0.99
                        },
                        {
                            "end": 12.9,
                            "start": 12.76,
                            "word": "佈",
                            "score": 0.86
                        },
                        {
                            "end": 13,
                            "start": 12.9,
                            "word": "了",
                            "score": 0.84
                        },
                        {
                            "end": 13.2,
                            "start": 13,
                            "word": "消",
                            "score": 0.98
                        },
                        {
                            "end": 13.44,
                            "start": 13.2,
                            "word": "息,",
                            "score": 1
                        },
                        {
                            "end": 13.82,
                            "start": 13.6,
                            "word": "你可以",
                            "score": 0.8
                        },
                        {
                            "end": 14.16,
                            "start": 13.82,
                            "word": "查",
                            "score": 0.83
                        },
                        {
                            "end": 14.32,
                            "start": 14.16,
                            "word": "閱",
                            "score": 0.95
                        }
                    ]
                },
                {
                    "end": 18.36,
                    "id": "ec0cea0cc2f1438488ca1839fc5b3138",
                    "start": 17.46,
                    "score": 0.7,
                    "text": "下一個問題",
                    "words": [
                        {
                            "end": 17.94,
                            "start": 17.46,
                            "word": "下",
                            "score": 0.16
                        },
                        {
                            "end": 18.06,
                            "start": 17.94,
                            "word": "一個",
                            "score": 0.99
                        },
                        {
                            "end": 18.36,
                            "start": 18.06,
                            "word": "問題",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 21.06,
                    "id": "ba7f6d64ca1a4a96a55b4b4d443ebfbf",
                    "start": 19.36,
                    "score": 0.7,
                    "text": "下午好,法新社提問",
                    "words": [
                        {
                            "end": 19.84,
                            "start": 19.36,
                            "word": "下",
                            "score": 0.37
                        },
                        {
                            "end": 19.98,
                            "start": 19.84,
                            "word": "午",
                            "score": 0.86
                        },
                        {
                            "end": 20.12,
                            "start": 19.98,
                            "word": "好,",
                            "score": 0.92
                        },
                        {
                            "end": 20.32,
                            "start": 20.22,
                            "word": "法",
                            "score": 0.68
                        },
                        {
                            "end": 20.48,
                            "start": 20.32,
                            "word": "新",
                            "score": 0.51
                        },
                        {
                            "end": 20.66,
                            "start": 20.48,
                            "word": "社",
                            "score": 0.98
                        },
                        {
                            "end": 20.82,
                            "start": 20.66,
                            "word": "提",
                            "score": 0.92
                        },
                        {
                            "end": 21.06,
                            "start": 20.82,
                            "word": "問",
                            "score": 0.89
                        }
                    ]
                },
                {
                    "end": 27.86,
                    "id": "ae8b6565ccdf46c59e72bf37ef55dc34",
                    "start": 21.7,
                    "score": 0.7,
                    "text": "白郊物榜站為什麼要刪除了所和 Qin Gang 有關的信息,謝謝",
                    "words": [
                        {
                            "end": 22.18,
                            "start": 21.7,
                            "word": "白",
                            "score": 0.15
                        },
                        {
                            "end": 22.34,
                            "start": 22.18,
                            "word": "郊",
                            "score": 0.58
                        },
                        {
                            "end": 22.54,
                            "start": 22.34,
                            "word": "物",
                            "score": 0.56
                        },
                        {
                            "end": 22.76,
                            "start": 22.54,
                            "word": "榜",
                            "score": 0.82
                        },
                        {
                            "end": 23.1,
                            "start": 22.76,
                            "word": "站",
                            "score": 0.9
                        },
                        {
                            "end": 23.92,
                            "start": 23.1,
                            "word": "為什麼",
                            "score": 0.67
                        },
                        {
                            "end": 24.26,
                            "start": 23.92,
                            "word": "要",
                            "score": 0.77
                        },
                        {
                            "end": 24.44,
                            "start": 24.26,
                            "word": "刪",
                            "score": 0.86
                        },
                        {
                            "end": 24.82,
                            "start": 24.44,
                            "word": "除",
                            "score": 1
                        },
                        {
                            "end": 25.06,
                            "start": 24.82,
                            "word": "了",
                            "score": 0.98
                        },
                        {
                            "end": 25.44,
                            "start": 25.06,
                            "word": "所",
                            "score": 0.48
                        },
                        {
                            "end": 26.18,
                            "start": 25.44,
                            "word": "和",
                            "score": 0.86
                        },
                        {
                            "end": 26.48,
                            "start": 26.18,
                            "word": " Qin",
                            "score": 0.26
                        },
                        {
                            "end": 26.7,
                            "start": 26.48,
                            "word": " Gang",
                            "score": 0.97
                        },
                        {
                            "end": 26.92,
                            "start": 26.7,
                            "word": " 有",
                            "score": 0.57
                        },
                        {
                            "end": 27.12,
                            "start": 26.92,
                            "word": "關",
                            "score": 0.98
                        },
                        {
                            "end": 27.26,
                            "start": 27.12,
                            "word": "的",
                            "score": 0.99
                        },
                        {
                            "end": 27.42,
                            "start": 27.26,
                            "word": "信",
                            "score": 0.89
                        },
                        {
                            "end": 27.62,
                            "start": 27.42,
                            "word": "息,",
                            "score": 1
                        },
                        {
                            "end": 27.86,
                            "start": 27.72,
                            "word": "謝謝",
                            "score": 0.99
                        }
                    ]
                },
                {
                    "end": 34.86,
                    "id": "1e5eee6cd128456a84e71e6791f9562e",
                    "start": 29.520000000000003,
                    "score": 0.9,
                    "text": "外交部網站的信息按照相關管理規定進行更新",
                    "words": [
                        {
                            "end": 29.92,
                            "start": 29.520000000000003,
                            "word": "外",
                            "score": 0.03
                        },
                        {
                            "end": 30.06,
                            "start": 29.92,
                            "word": "交",
                            "score": 1
                        },
                        {
                            "end": 30.22,
                            "start": 30.06,
                            "word": "部",
                            "score": 1
                        },
                        {
                            "end": 30.42,
                            "start": 30.22,
                            "word": "網",
                            "score": 0.45
                        },
                        {
                            "end": 30.62,
                            "start": 30.42,
                            "word": "站",
                            "score": 0.91
                        },
                        {
                            "end": 30.86,
                            "start": 30.62,
                            "word": "的",
                            "score": 0.94
                        },
                        {
                            "end": 31.06,
                            "start": 30.86,
                            "word": "信",
                            "score": 0.92
                        },
                        {
                            "end": 31.34,
                            "start": 31.06,
                            "word": "息",
                            "score": 1
                        },
                        {
                            "end": 31.54,
                            "start": 31.34,
                            "word": "按",
                            "score": 0.81
                        },
                        {
                            "end": 31.82,
                            "start": 31.54,
                            "word": "照",
                            "score": 0.99
                        },
                        {
                            "end": 32.12,
                            "start": 31.82,
                            "word": "相",
                            "score": 0.99
                        },
                        {
                            "end": 32.38,
                            "start": 32.12,
                            "word": "關",
                            "score": 1
                        },
                        {
                            "end": 32.62,
                            "start": 32.38,
                            "word": "管",
                            "score": 0.99
                        },
                        {
                            "end": 32.84,
                            "start": 32.62,
                            "word": "理",
                            "score": 1
                        },
                        {
                            "end": 33.06,
                            "start": 32.84,
                            "word": "規",
                            "score": 0.97
                        },
                        {
                            "end": 33.34,
                            "start": 33.06,
                            "word": "定",
                            "score": 1
                        },
                        {
                            "end": 33.66,
                            "start": 33.34,
                            "word": "進",
                            "score": 0.94
                        },
                        {
                            "end": 33.82,
                            "start": 33.66,
                            "word": "行",
                            "score": 1
                        },
                        {
                            "end": 34,
                            "start": 33.82,
                            "word": "更",
                            "score": 1
                        },
                        {
                            "end": 34.86,
                            "start": 34,
                            "word": "新",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 51.36,
                    "id": "7f52429c41314a70bbff2de57eafa810",
                    "start": 46.88,
                    "score": 0.9,
                    "text": "十四屆全國人大常委會第四次會議的有關決定",
                    "words": [
                        {
                            "end": 47.28,
                            "start": 46.88,
                            "word": "十",
                            "score": 0.21
                        },
                        {
                            "end": 47.68,
                            "start": 47.28,
                            "word": "四",
                            "score": 0.99
                        },
                        {
                            "end": 47.84,
                            "start": 47.68,
                            "word": "屆",
                            "score": 0.99
                        },
                        {
                            "end": 48.12,
                            "start": 47.84,
                            "word": "全",
                            "score": 0.96
                        },
                        {
                            "end": 48.36,
                            "start": 48.12,
                            "word": "國",
                            "score": 0.98
                        },
                        {
                            "end": 48.52,
                            "start": 48.36,
                            "word": "人",
                            "score": 0.99
                        },
                        {
                            "end": 48.68,
                            "start": 48.52,
                            "word": "大",
                            "score": 0.99
                        },
                        {
                            "end": 48.86,
                            "start": 48.68,
                            "word": "常",
                            "score": 0.99
                        },
                        {
                            "end": 49.02,
                            "start": 48.86,
                            "word": "委",
                            "score": 1
                        },
                        {
                            "end": 49.22,
                            "start": 49.02,
                            "word": "會",
                            "score": 1
                        },
                        {
                            "end": 49.46,
                            "start": 49.22,
                            "word": "第",
                            "score": 0.92
                        },
                        {
                            "end": 49.7,
                            "start": 49.46,
                            "word": "四",
                            "score": 0.99
                        },
                        {
                            "end": 49.9,
                            "start": 49.7,
                            "word": "次",
                            "score": 1
                        },
                        {
                            "end": 50.08,
                            "start": 49.9,
                            "word": "會",
                            "score": 1
                        },
                        {
                            "end": 50.2,
                            "start": 50.08,
                            "word": "議",
                            "score": 1
                        },
                        {
                            "end": 50.28,
                            "start": 50.2,
                            "word": "的",
                            "score": 0.91
                        },
                        {
                            "end": 50.38,
                            "start": 50.28,
                            "word": "有",
                            "score": 0.99
                        },
                        {
                            "end": 50.54,
                            "start": 50.38,
                            "word": "關",
                            "score": 1
                        },
                        {
                            "end": 50.76,
                            "start": 50.54,
                            "word": "決",
                            "score": 0.99
                        },
                        {
                            "end": 51.36,
                            "start": 50.76,
                            "word": "定",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 55.56,
                    "id": "4633722d0c984fc7834bf99f2e9ffda9",
                    "start": 51.36,
                    "score": 0.9,
                    "text": "和中華人民共和國主席令表述得很清楚,你可以查閱",
                    "words": [
                        {
                            "end": 51.64,
                            "start": 51.36,
                            "word": "和",
                            "score": 0.95
                        },
                        {
                            "end": 51.9,
                            "start": 51.64,
                            "word": "中",
                            "score": 0.99
                        },
                        {
                            "end": 52.04,
                            "start": 51.9,
                            "word": "華",
                            "score": 1
                        },
                        {
                            "end": 52.24,
                            "start": 52.04,
                            "word": "人民",
                            "score": 1
                        },
                        {
                            "end": 52.5,
                            "start": 52.24,
                            "word": "共",
                            "score": 1
                        },
                        {
                            "end": 52.66,
                            "start": 52.5,
                            "word": "和",
                            "score": 1
                        },
                        {
                            "end": 52.82,
                            "start": 52.66,
                            "word": "國",
                            "score": 1
                        },
                        {
                            "end": 52.98,
                            "start": 52.82,
                            "word": "主",
                            "score": 1
                        },
                        {
                            "end": 53.18,
                            "start": 52.98,
                            "word": "席",
                            "score": 1
                        },
                        {
                            "end": 53.38,
                            "start": 53.18,
                            "word": "令",
                            "score": 0.88
                        },
                        {
                            "end": 53.86,
                            "start": 53.38,
                            "word": "表",
                            "score": 0.94
                        },
                        {
                            "end": 54.04,
                            "start": 53.86,
                            "word": "述",
                            "score": 1
                        },
                        {
                            "end": 54.16,
                            "start": 54.04,
                            "word": "得",
                            "score": 0.87
                        },
                        {
                            "end": 54.34,
                            "start": 54.16,
                            "word": "很",
                            "score": 0.99
                        },
                        {
                            "end": 54.72,
                            "start": 54.34,
                            "word": "清楚,",
                            "score": 1
                        },
                        {
                            "end": 55.08,
                            "start": 54.9,
                            "word": "你可以",
                            "score": 0.79
                        },
                        {
                            "end": 55.4,
                            "start": 55.08,
                            "word": "查",
                            "score": 0.7
                        },
                        {
                            "end": 55.56,
                            "start": 55.4,
                            "word": "閱",
                            "score": 0.97
                        }
                    ]
                },
                {
                    "end": 58.14,
                    "id": "9afda4b76ca842328208ef42455240e2",
                    "start": 56.82,
                    "score": 0.73,
                    "text": "謝謝,裏面叫李登山",
                    "words": [
                        {
                            "end": 57.18,
                            "start": 56.82,
                            "word": "謝謝,",
                            "score": 0.13
                        },
                        {
                            "end": 57.38,
                            "start": 57.32,
                            "word": "裏",
                            "score": 0.55
                        },
                        {
                            "end": 57.52,
                            "start": 57.38,
                            "word": "面",
                            "score": 0.64
                        },
                        {
                            "end": 57.68,
                            "start": 57.52,
                            "word": "叫",
                            "score": 0.1
                        },
                        {
                            "end": 57.84,
                            "start": 57.68,
                            "word": "李",
                            "score": 0.56
                        },
                        {
                            "end": 57.96,
                            "start": 57.84,
                            "word": "登",
                            "score": 0.51
                        },
                        {
                            "end": 58.14,
                            "start": 57.96,
                            "word": "山",
                            "score": 0.4
                        }
                    ]
                },
                {
                    "end": 63.4,
                    "id": "9b556a15a4944e9db54a2c3a1a688027",
                    "start": 58.86,
                    "score": 0.73,
                    "text": "昨天,全國人大常委會決定免去 Qin Gang 外政的人物",
                    "words": [
                        {
                            "end": 59.22,
                            "start": 58.86,
                            "word": "昨",
                            "score": 0.74
                        },
                        {
                            "end": 59.48,
                            "start": 59.22,
                            "word": "天,",
                            "score": 0.99
                        },
                        {
                            "end": 59.74,
                            "start": 59.64,
                            "word": "全",
                            "score": 0.27
                        },
                        {
                            "end": 59.9,
                            "start": 59.74,
                            "word": "國",
                            "score": 0.99
                        },
                        {
                            "end": 60.08,
                            "start": 59.9,
                            "word": "人",
                            "score": 0.95
                        },
                        {
                            "end": 60.28,
                            "start": 60.08,
                            "word": "大",
                            "score": 0.01
                        },
                        {
                            "end": 60.5,
                            "start": 60.28,
                            "word": "常",
                            "score": 0.78
                        },
                        {
                            "end": 60.66,
                            "start": 60.5,
                            "word": "委",
                            "score": 1
                        },
                        {
                            "end": 60.92,
                            "start": 60.66,
                            "word": "會",
                            "score": 0.99
                        },
                        {
                            "end": 61.32,
                            "start": 60.92,
                            "word": "決",
                            "score": 0.47
                        },
                        {
                            "end": 61.64,
                            "start": 61.32,
                            "word": "定",
                            "score": 0.99
                        },
                        {
                            "end": 61.88,
                            "start": 61.64,
                            "word": "免",
                            "score": 0.54
                        },
                        {
                            "end": 62.14,
                            "start": 61.88,
                            "word": "去",
                            "score": 0.41
                        },
                        {
                            "end": 62.36,
                            "start": 62.14,
                            "word": " Qin",
                            "score": 0
                        },
                        {
                            "end": 62.5,
                            "start": 62.36,
                            "word": " Gang",
                            "score": 0.35
                        },
                        {
                            "end": 62.68,
                            "start": 62.58,
                            "word": " 外",
                            "score": 0.98
                        },
                        {
                            "end": 62.82,
                            "start": 62.68,
                            "word": "政",
                            "score": 0.21
                        },
                        {
                            "end": 63.06,
                            "start": 62.82,
                            "word": "的人",
                            "score": 0.62
                        },
                        {
                            "end": 63.4,
                            "start": 63.06,
                            "word": "物",
                            "score": 0.63
                        }
                    ]
                },
                {
                    "end": 66.76,
                    "id": "5851d522370d47ab840dddcf574ebf16",
                    "start": 63.8,
                    "score": 0.73,
                    "text": "他免去外政的理由是能夠健康為敵嗎?",
                    "words": [
                        {
                            "end": 64.16,
                            "start": 63.8,
                            "word": "他",
                            "score": 0.48
                        },
                        {
                            "end": 64.32,
                            "start": 64.16,
                            "word": "免",
                            "score": 0.94
                        },
                        {
                            "end": 64.48,
                            "start": 64.32,
                            "word": "去",
                            "score": 0.95
                        },
                        {
                            "end": 64.72,
                            "start": 64.48,
                            "word": "外",
                            "score": 0.99
                        },
                        {
                            "end": 64.88,
                            "start": 64.72,
                            "word": "政",
                            "score": 0.99
                        },
                        {
                            "end": 65.06,
                            "start": 64.88,
                            "word": "的",
                            "score": 0.91
                        },
                        {
                            "end": 65.22,
                            "start": 65.06,
                            "word": "理",
                            "score": 0.98
                        },
                        {
                            "end": 65.36,
                            "start": 65.22,
                            "word": "由",
                            "score": 1
                        },
                        {
                            "end": 65.56,
                            "start": 65.36,
                            "word": "是",
                            "score": 0.92
                        },
                        {
                            "end": 65.7,
                            "start": 65.56,
                            "word": "能",
                            "score": 0.64
                        },
                        {
                            "end": 65.84,
                            "start": 65.7,
                            "word": "夠",
                            "score": 0.69
                        },
                        {
                            "end": 66.02,
                            "start": 65.84,
                            "word": "健",
                            "score": 0.68
                        },
                        {
                            "end": 66.26,
                            "start": 66.02,
                            "word": "康",
                            "score": 1
                        },
                        {
                            "end": 66.46,
                            "start": 66.26,
                            "word": "為",
                            "score": 0.49
                        },
                        {
                            "end": 66.62,
                            "start": 66.46,
                            "word": "敵",
                            "score": 0.59
                        },
                        {
                            "end": 66.76,
                            "start": 66.62,
                            "word": "嗎?",
                            "score": 0.32
                        }
                    ]
                },
                {
                    "end": 69.12,
                    "id": "f17deec4c86d466692cd81ddf483d322",
                    "start": 66.88,
                    "score": 0.73,
                    "text": "能夠請教主席的理由",
                    "words": [
                        {
                            "end": 66.88,
                            "start": 66.88,
                            "word": "能",
                            "score": 0.03
                        },
                        {
                            "end": 67.26,
                            "start": 66.88,
                            "word": "夠",
                            "score": 0.97
                        },
                        {
                            "end": 67.4,
                            "start": 67.26,
                            "word": "請",
                            "score": 0.08
                        },
                        {
                            "end": 67.56,
                            "start": 67.4,
                            "word": "教",
                            "score": 0.84
                        },
                        {
                            "end": 67.98,
                            "start": 67.56,
                            "word": "主",
                            "score": 0.06
                        },
                        {
                            "end": 68.2,
                            "start": 67.98,
                            "word": "席",
                            "score": 0.9
                        },
                        {
                            "end": 68.38,
                            "start": 68.2,
                            "word": "的",
                            "score": 0.74
                        },
                        {
                            "end": 68.84,
                            "start": 68.38,
                            "word": "理",
                            "score": 0.99
                        },
                        {
                            "end": 69.12,
                            "start": 68.84,
                            "word": "由",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 72.34,
                    "id": "b44fba48007f4d84b83787182dcb7409",
                    "start": 70.54,
                    "score": 0.73,
                    "text": "我沒有可以提供的信息",
                    "words": [
                        {
                            "end": 70.9,
                            "start": 70.54,
                            "word": "我",
                            "score": 0.51
                        },
                        {
                            "end": 71.12,
                            "start": 70.9,
                            "word": "沒有",
                            "score": 0.96
                        },
                        {
                            "end": 71.44,
                            "start": 71.12,
                            "word": "可以",
                            "score": 0.77
                        },
                        {
                            "end": 71.62,
                            "start": 71.44,
                            "word": "提",
                            "score": 1
                        },
                        {
                            "end": 71.76,
                            "start": 71.62,
                            "word": "供",
                            "score": 1
                        },
                        {
                            "end": 71.9,
                            "start": 71.76,
                            "word": "的",
                            "score": 0.98
                        },
                        {
                            "end": 72.06,
                            "start": 71.9,
                            "word": "信",
                            "score": 0.6
                        },
                        {
                            "end": 72.34,
                            "start": 72.06,
                            "word": "息",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 74.56,
                    "id": "dace0514f46840b089cac78b1e786ea6",
                    "start": 72.34,
                    "score": 0.73,
                    "text": "我還是建議你查閱新華社發佈的消息",
                    "words": [
                        {
                            "end": 72.62,
                            "start": 72.34,
                            "word": "我",
                            "score": 0.73
                        },
                        {
                            "end": 72.82,
                            "start": 72.62,
                            "word": "還是",
                            "score": 0.98
                        },
                        {
                            "end": 73,
                            "start": 72.82,
                            "word": "建",
                            "score": 0.99
                        },
                        {
                            "end": 73.12,
                            "start": 73,
                            "word": "議",
                            "score": 1
                        },
                        {
                            "end": 73.26,
                            "start": 73.12,
                            "word": "你",
                            "score": 0.35
                        },
                        {
                            "end": 73.36,
                            "start": 73.26,
                            "word": "查",
                            "score": 0.9
                        },
                        {
                            "end": 73.5,
                            "start": 73.36,
                            "word": "閱",
                            "score": 0.98
                        },
                        {
                            "end": 73.66,
                            "start": 73.5,
                            "word": "新",
                            "score": 0.88
                        },
                        {
                            "end": 73.76,
                            "start": 73.66,
                            "word": "華",
                            "score": 0.96
                        },
                        {
                            "end": 73.9,
                            "start": 73.76,
                            "word": "社",
                            "score": 0.99
                        },
                        {
                            "end": 74.08,
                            "start": 73.9,
                            "word": "發",
                            "score": 0.98
                        },
                        {
                            "end": 74.18,
                            "start": 74.08,
                            "word": "佈",
                            "score": 0.85
                        },
                        {
                            "end": 74.3,
                            "start": 74.18,
                            "word": "的",
                            "score": 0.99
                        },
                        {
                            "end": 74.46,
                            "start": 74.3,
                            "word": "消",
                            "score": 0.98
                        },
                        {
                            "end": 74.63999999999999,
                            "start": 74.46,
                            "word": "息",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 80.48,
                    "id": "d43884cd59174d95ab495ae25d1aaa24",
                    "start": 75.7,
                    "score": 0.73,
                    "text": "還是關於 Qin Gang 目前人在哪裡",
                    "words": [
                        {
                            "end": 76.06,
                            "start": 75.7,
                            "word": "還是",
                            "score": 0.84
                        },
                        {
                            "end": 76.28,
                            "start": 76.06,
                            "word": "關",
                            "score": 0.98
                        },
                        {
                            "end": 76.38,
                            "start": 76.28,
                            "word": "於",
                            "score": 0.99
                        },
                        {
                            "end": 76.64,
                            "start": 76.38,
                            "word": " Qin",
                            "score": 0.57
                        },
                        {
                            "end": 76.84,
                            "start": 76.64,
                            "word": " Gang",
                            "score": 0.87
                        },
                        {
                            "end": 79.32,
                            "start": 76.9,
                            "word": " 目前",
                            "score": 0.17
                        },
                        {
                            "end": 79.9,
                            "start": 79.32,
                            "word": "人",
                            "score": 0.78
                        },
                        {
                            "end": 80.16,
                            "start": 79.9,
                            "word": "在",
                            "score": 0.94
                        },
                        {
                            "end": 80.48,
                            "start": 80.16,
                            "word": "哪裡",
                            "score": 0.47
                        }
                    ]
                },
                {
                    "end": 83.6,
                    "id": "f0559d07f11640049fef43dfb8b2eb1a",
                    "start": 81.72,
                    "score": 0.73,
                    "text": "你有這方面的消息嗎,謝謝",
                    "words": [
                        {
                            "end": 82.08,
                            "start": 81.72,
                            "word": "你有",
                            "score": 0.15
                        },
                        {
                            "end": 82.44,
                            "start": 82.08,
                            "word": "這",
                            "score": 0.87
                        },
                        {
                            "end": 82.64,
                            "start": 82.44,
                            "word": "方面",
                            "score": 1
                        },
                        {
                            "end": 82.82,
                            "start": 82.64,
                            "word": "的",
                            "score": 1
                        },
                        {
                            "end": 83,
                            "start": 82.82,
                            "word": "消",
                            "score": 0.98
                        },
                        {
                            "end": 83.2,
                            "start": 83,
                            "word": "息",
                            "score": 1
                        },
                        {
                            "end": 83.38,
                            "start": 83.2,
                            "word": "嗎,",
                            "score": 0.91
                        },
                        {
                            "end": 83.6,
                            "start": 83.46,
                            "word": "謝謝",
                            "score": 0.96
                        }
                    ]
                },
                {
                    "end": 85.76,
                    "id": "08c6875dadf64a4d9688500d0cdf98a8",
                    "start": 83.6,
                    "score": 0.85,
                    "text": "我沒有可以提供的信息",
                    "words": [
                        {
                            "end": 84.44,
                            "start": 83.6,
                            "word": "我",
                            "score": 0.3
                        },
                        {
                            "end": 84.62,
                            "start": 84.44,
                            "word": "沒有",
                            "score": 0.76
                        },
                        {
                            "end": 84.88,
                            "start": 84.62,
                            "word": "可以",
                            "score": 0.88
                        },
                        {
                            "end": 85.04,
                            "start": 84.88,
                            "word": "提",
                            "score": 1
                        },
                        {
                            "end": 85.16,
                            "start": 85.04,
                            "word": "供",
                            "score": 1
                        },
                        {
                            "end": 85.3,
                            "start": 85.16,
                            "word": "的",
                            "score": 0.97
                        },
                        {
                            "end": 85.48,
                            "start": 85.3,
                            "word": "信",
                            "score": 0.92
                        },
                        {
                            "end": 85.76,
                            "start": 85.48,
                            "word": "息",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 87.82,
                    "id": "cf2e2705928248da9377ca4c9f8eb202",
                    "start": 86.60000000000001,
                    "score": 0.85,
                    "text": "謝謝路透社",
                    "words": [
                        {
                            "end": 86.92,
                            "start": 86.6,
                            "word": "謝謝",
                            "score": 0.79
                        },
                        {
                            "end": 87.12,
                            "start": 86.92,
                            "word": "路",
                            "score": 0.41
                        },
                        {
                            "end": 87.3,
                            "start": 87.12,
                            "word": "透",
                            "score": 0.98
                        },
                        {
                            "end": 87.82,
                            "start": 87.3,
                            "word": "社",
                            "score": 0.97
                        }
                    ]
                },
                {
                    "end": 93.2,
                    "id": "be276cd059144e9eae3f09d8d507371f",
                    "start": 88.60000000000001,
                    "score": 0.85,
                    "text": "再問一下剛才你說新華社的相關報導",
                    "words": [
                        {
                            "end": 89.04,
                            "start": 88.60000000000001,
                            "word": "再",
                            "score": 0.38
                        },
                        {
                            "end": 89.5,
                            "start": 89.04,
                            "word": "問",
                            "score": 0.99
                        },
                        {
                            "end": 89.8,
                            "start": 89.5,
                            "word": "一下",
                            "score": 0.98
                        },
                        {
                            "end": 90.38,
                            "start": 89.8,
                            "word": "剛",
                            "score": 0.6
                        },
                        {
                            "end": 90.58,
                            "start": 90.38,
                            "word": "才",
                            "score": 0.98
                        },
                        {
                            "end": 91.02,
                            "start": 90.58,
                            "word": "你說",
                            "score": 0.77
                        },
                        {
                            "end": 91.72,
                            "start": 91.02,
                            "word": "新",
                            "score": 0.41
                        },
                        {
                            "end": 91.88,
                            "start": 91.72,
                            "word": "華",
                            "score": 1
                        },
                        {
                            "end": 92.12,
                            "start": 91.88,
                            "word": "社",
                            "score": 1
                        },
                        {
                            "end": 92.32,
                            "start": 92.12,
                            "word": "的",
                            "score": 0.92
                        },
                        {
                            "end": 92.68,
                            "start": 92.32,
                            "word": "相",
                            "score": 0.99
                        },
                        {
                            "end": 92.82,
                            "start": 92.68,
                            "word": "關",
                            "score": 1
                        },
                        {
                            "end": 93.2,
                            "start": 92.82,
                            "word": "報導",
                            "score": 0.9
                        }
                    ]
                },
                {
                    "end": 96.56,
                    "id": "6b3f8197682a4f9da6f03d811b9da657",
                    "start": 93.2,
                    "score": 0.85,
                    "text": "已經表達得非常清楚",
                    "words": [
                        {
                            "end": 94,
                            "start": 93.2,
                            "word": "已經",
                            "score": 0.95
                        },
                        {
                            "end": 95.64,
                            "start": 94,
                            "word": "表",
                            "score": 0.96
                        },
                        {
                            "end": 95.78,
                            "start": 95.64,
                            "word": "達",
                            "score": 1
                        },
                        {
                            "end": 95.9,
                            "start": 95.78,
                            "word": "得",
                            "score": 0.67
                        },
                        {
                            "end": 96.08,
                            "start": 95.9,
                            "word": "非常",
                            "score": 0.99
                        },
                        {
                            "end": 96.56,
                            "start": 96.08,
                            "word": "清楚",
                            "score": 0.85
                        }
                    ]
                },
                {
                    "end": 97.62,
                    "id": "2f241b704aaa4bff97af48b13a11cc3a",
                    "start": 96.56,
                    "score": 0.85,
                    "text": "現在的情況",
                    "words": [
                        {
                            "end": 97.16,
                            "start": 96.56,
                            "word": "現在",
                            "score": 0.74
                        },
                        {
                            "end": 97.36,
                            "start": 97.16,
                            "word": "的",
                            "score": 0.85
                        },
                        {
                            "end": 97.62,
                            "start": 97.36,
                            "word": "情況",
                            "score": 0.99
                        }
                    ]
                },
                {
                    "end": 102.68,
                    "id": "b478164dd54f4523be83e1dade27490b",
                    "start": 98.58,
                    "score": 0.85,
                    "text": "我理解你說你認為非常清楚",
                    "words": [
                        {
                            "end": 99.22,
                            "start": 98.58,
                            "word": "我",
                            "score": 0.72
                        },
                        {
                            "end": 99.44,
                            "start": 99.22,
                            "word": "理",
                            "score": 0.99
                        },
                        {
                            "end": 99.72,
                            "start": 99.44,
                            "word": "解",
                            "score": 1
                        },
                        {
                            "end": 101,
                            "start": 99.72,
                            "word": "你說",
                            "score": 0.91
                        },
                        {
                            "end": 101.44,
                            "start": 101,
                            "word": "你",
                            "score": 0.9
                        },
                        {
                            "end": 101.8,
                            "start": 101.44,
                            "word": "認為",
                            "score": 1
                        },
                        {
                            "end": 102.18,
                            "start": 101.8,
                            "word": "非常",
                            "score": 0.99
                        },
                        {
                            "end": 102.68,
                            "start": 102.18,
                            "word": "清楚",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 105.4,
                    "id": "923519b388af464caf7e6e5e4c62a864",
                    "start": 102.68,
                    "score": 0.85,
                    "text": "對我們來說還是不太清楚",
                    "words": [
                        {
                            "end": 103.7,
                            "start": 102.68,
                            "word": "對",
                            "score": 0.5
                        },
                        {
                            "end": 103.94,
                            "start": 103.7,
                            "word": "我們",
                            "score": 0.67
                        },
                        {
                            "end": 104.34,
                            "start": 103.94,
                            "word": "來說",
                            "score": 1
                        },
                        {
                            "end": 104.66,
                            "start": 104.34,
                            "word": "還是",
                            "score": 0.97
                        },
                        {
                            "end": 104.9,
                            "start": 104.66,
                            "word": "不",
                            "score": 1
                        },
                        {
                            "end": 105.02,
                            "start": 104.9,
                            "word": "太",
                            "score": 1
                        },
                        {
                            "end": 105.4,
                            "start": 105.02,
                            "word": "清楚",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 107.22,
                    "id": "54346263902142e88bc19bee338a9e74",
                    "start": 105.4,
                    "score": 0.85,
                    "text": "所以想再問一下",
                    "words": [
                        {
                            "end": 106,
                            "start": 105.4,
                            "word": "所以",
                            "score": 0.84
                        },
                        {
                            "end": 106.26,
                            "start": 106,
                            "word": "想",
                            "score": 0.95
                        },
                        {
                            "end": 106.6,
                            "start": 106.26,
                            "word": "再",
                            "score": 0.98
                        },
                        {
                            "end": 106.78,
                            "start": 106.6,
                            "word": "問",
                            "score": 1
                        },
                        {
                            "end": 107.22,
                            "start": 106.78,
                            "word": "一下",
                            "score": 0.99
                        }
                    ]
                },
                {
                    "end": 111.56,
                    "id": "1c781d5650004a6b840b3377d973699c",
                    "start": 108.78,
                    "score": 0.85,
                    "text": "他不是外長這個事情",
                    "words": [
                        {
                            "end": 109.42,
                            "start": 108.78,
                            "word": "他",
                            "score": 0.5
                        },
                        {
                            "end": 110.06,
                            "start": 109.42,
                            "word": "不是",
                            "score": 0.94
                        },
                        {
                            "end": 110.38,
                            "start": 110.06,
                            "word": "外",
                            "score": 0.99
                        },
                        {
                            "end": 110.6,
                            "start": 110.38,
                            "word": "長",
                            "score": 0.98
                        },
                        {
                            "end": 110.92,
                            "start": 110.6,
                            "word": "這個",
                            "score": 0.91
                        },
                        {
                            "end": 111.56,
                            "start": 110.92,
                            "word": "事情",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 114.52,
                    "id": "b7129f3ffb9649dea8b9a1956341bb96",
                    "start": 112.53999999999999,
                    "score": 0.86,
                    "text": "為什麼你覺得清楚",
                    "words": [
                        {
                            "end": 113.06,
                            "start": 112.53999999999999,
                            "word": "為什麼",
                            "score": 0.07
                        },
                        {
                            "end": 113.52,
                            "start": 113.06,
                            "word": "你",
                            "score": 0.92
                        },
                        {
                            "end": 114.06,
                            "start": 113.52,
                            "word": "覺得",
                            "score": 0.93
                        },
                        {
                            "end": 114.52,
                            "start": 114.06,
                            "word": "清楚",
                            "score": 0.97
                        }
                    ]
                },
                {
                    "end": 116.3,
                    "id": "3b7b9259ff454024b85fcde9df17b9e1",
                    "start": 114.52,
                    "score": 0.86,
                    "text": "他清楚在哪裡",
                    "words": [
                        {
                            "end": 115.2,
                            "start": 114.52,
                            "word": "他",
                            "score": 0.36
                        },
                        {
                            "end": 115.62,
                            "start": 115.2,
                            "word": "清楚",
                            "score": 0.97
                        },
                        {
                            "end": 115.96,
                            "start": 115.62,
                            "word": "在",
                            "score": 0.99
                        },
                        {
                            "end": 116.3,
                            "start": 115.96,
                            "word": "哪裡",
                            "score": 0.92
                        }
                    ]
                },
                {
                    "end": 116.84,
                    "id": "666e63f477904268bd96dc467e2f5e43",
                    "start": 116.3,
                    "score": 0.86,
                    "text": "謝謝",
                    "words": [
                        {
                            "end": 116.84,
                            "start": 116.3,
                            "word": "謝謝",
                            "score": 0.65
                        }
                    ]
                },
                {
                    "end": 120.68,
                    "id": "65cd6849765f430180d9e3f1c7d2aed0",
                    "start": 118.74000000000001,
                    "score": 0.86,
                    "text": "我已經回答過這個問題",
                    "words": [
                        {
                            "end": 119.26,
                            "start": 118.74000000000001,
                            "word": "我",
                            "score": 0.93
                        },
                        {
                            "end": 119.46,
                            "start": 119.26,
                            "word": "已經",
                            "score": 0.99
                        },
                        {
                            "end": 119.66,
                            "start": 119.46,
                            "word": "回",
                            "score": 1
                        },
                        {
                            "end": 119.82,
                            "start": 119.66,
                            "word": "答",
                            "score": 1
                        },
                        {
                            "end": 119.98,
                            "start": 119.82,
                            "word": "過",
                            "score": 0.87
                        },
                        {
                            "end": 120.2,
                            "start": 119.98,
                            "word": "這個",
                            "score": 0.98
                        },
                        {
                            "end": 120.68,
                            "start": 120.2,
                            "word": "問題",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 123.52,
                    "id": "a2116a44353445c2abd671f73231e4d1",
                    "start": 120.68,
                    "score": 0.86,
                    "text": "新華社已經發佈了消息",
                    "words": [
                        {
                            "end": 121.54,
                            "start": 120.68,
                            "word": "新",
                            "score": 0.94
                        },
                        {
                            "end": 121.74,
                            "start": 121.54,
                            "word": "華",
                            "score": 1
                        },
                        {
                            "end": 121.98,
                            "start": 121.74,
                            "word": "社",
                            "score": 1
                        },
                        {
                            "end": 122.3,
                            "start": 121.98,
                            "word": "已經",
                            "score": 0.98
                        },
                        {
                            "end": 122.64,
                            "start": 122.3,
                            "word": "發",
                            "score": 0.98
                        },
                        {
                            "end": 122.84,
                            "start": 122.64,
                            "word": "佈",
                            "score": 0.85
                        },
                        {
                            "end": 123,
                            "start": 122.84,
                            "word": "了",
                            "score": 0.93
                        },
                        {
                            "end": 123.2,
                            "start": 123,
                            "word": "消",
                            "score": 1
                        },
                        {
                            "end": 123.52,
                            "start": 123.2,
                            "word": "息",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 126.24,
                    "id": "ba8f768857f94237a948b776f690ca65",
                    "start": 123.52,
                    "score": 0.86,
                    "text": "除此之外我沒有更多的信息",
                    "words": [
                        {
                            "end": 123.82,
                            "start": 123.52,
                            "word": "除",
                            "score": 0.99
                        },
                        {
                            "end": 124.08,
                            "start": 123.82,
                            "word": "此",
                            "score": 1
                        },
                        {
                            "end": 124.26,
                            "start": 124.08,
                            "word": "之",
                            "score": 1
                        },
                        {
                            "end": 124.42,
                            "start": 124.26,
                            "word": "外",
                            "score": 1
                        },
                        {
                            "end": 124.6,
                            "start": 124.42,
                            "word": "我",
                            "score": 0.85
                        },
                        {
                            "end": 124.78,
                            "start": 124.6,
                            "word": "沒有",
                            "score": 0.99
                        },
                        {
                            "end": 125.04,
                            "start": 124.78,
                            "word": "更",
                            "score": 1
                        },
                        {
                            "end": 125.24,
                            "start": 125.04,
                            "word": "多",
                            "score": 1
                        },
                        {
                            "end": 125.38,
                            "start": 125.24,
                            "word": "的",
                            "score": 0.99
                        },
                        {
                            "end": 125.56,
                            "start": 125.38,
                            "word": "信",
                            "score": 0.9
                        },
                        {
                            "end": 126.24,
                            "start": 125.56,
                            "word": "息",
                            "score": 0.98
                        }
                    ]
                },
                {
                    "end": 129.72,
                    "id": "312d40dbc30140e187d8aee3beb56edc",
                    "start": 128.72,
                    "score": 0.86,
                    "text": "下一個問題",
                    "words": [
                        {
                            "end": 129.24,
                            "start": 128.72,
                            "word": "下",
                            "score": 0.96
                        },
                        {
                            "end": 129.38,
                            "start": 129.24,
                            "word": "一個",
                            "score": 0.98
                        },
                        {
                            "end": 129.72,
                            "start": 129.38,
                            "word": "問題",
                            "score": 0.99
                        }
                    ]
                },
                {
                    "end": 135.46,
                    "id": "add1f5238a4d41169999a9d60a606b50",
                    "start": 133.7,
                    "score": 0.86,
                    "text": "那你作為發言人",
                    "words": [
                        {
                            "end": 134.22,
                            "start": 133.7,
                            "word": "那",
                            "score": 0.68
                        },
                        {
                            "end": 134.42,
                            "start": 134.22,
                            "word": "你",
                            "score": 0.95
                        },
                        {
                            "end": 134.8,
                            "start": 134.42,
                            "word": "作",
                            "score": 0.95
                        },
                        {
                            "end": 134.98,
                            "start": 134.8,
                            "word": "為",
                            "score": 1
                        },
                        {
                            "end": 135.16,
                            "start": 134.98,
                            "word": "發",
                            "score": 0.88
                        },
                        {
                            "end": 135.28,
                            "start": 135.16,
                            "word": "言",
                            "score": 0.92
                        },
                        {
                            "end": 135.46,
                            "start": 135.28,
                            "word": "人",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 139.38,
                    "id": "23e255f3cea9427c9a79e8070ef15185",
                    "start": 135.46,
                    "score": 0.86,
                    "text": "你如何評價 Qin Gang 就",
                    "words": [
                        {
                            "end": 135.7,
                            "start": 135.46,
                            "word": "你",
                            "score": 0.89
                        },
                        {
                            "end": 137.38,
                            "start": 135.7,
                            "word": "如何",
                            "score": 0.52
                        },
                        {
                            "end": 137.76,
                            "start": 137.38,
                            "word": "評",
                            "score": 0.87
                        },
                        {
                            "end": 138.02,
                            "start": 137.76,
                            "word": "價",
                            "score": 1
                        },
                        {
                            "end": 138.34,
                            "start": 138.02,
                            "word": " Qin",
                            "score": 0
                        },
                        {
                            "end": 138.68,
                            "start": 138.34,
                            "word": " Gang",
                            "score": 0.81
                        },
                        {
                            "end": 139.38,
                            "start": 138.68,
                            "word": " 就",
                            "score": 0.15
                        }
                    ]
                },
                {
                    "end": 142.32,
                    "id": "e39a8dba735e4a05b466e27082b057cc",
                    "start": 139.38,
                    "score": 0.84,
                    "text": "帶人外交部部長這個七個月的工作",
                    "words": [
                        {
                            "end": 139.88,
                            "start": 139.38,
                            "word": "帶",
                            "score": 0.02
                        },
                        {
                            "end": 140.02,
                            "start": 139.88,
                            "word": "人",
                            "score": 0.76
                        },
                        {
                            "end": 140.22,
                            "start": 140.02,
                            "word": "外",
                            "score": 0.92
                        },
                        {
                            "end": 140.36,
                            "start": 140.22,
                            "word": "交",
                            "score": 0.99
                        },
                        {
                            "end": 140.52,
                            "start": 140.36,
                            "word": "部",
                            "score": 0.8
                        },
                        {
                            "end": 140.72,
                            "start": 140.52,
                            "word": "部",
                            "score": 0.37
                        },
                        {
                            "end": 140.86,
                            "start": 140.72,
                            "word": "長",
                            "score": 0.97
                        },
                        {
                            "end": 141.14,
                            "start": 140.86,
                            "word": "這個",
                            "score": 0.54
                        },
                        {
                            "end": 141.66,
                            "start": 141.14,
                            "word": "七",
                            "score": 0.66
                        },
                        {
                            "end": 141.78,
                            "start": 141.66,
                            "word": "個",
                            "score": 1
                        },
                        {
                            "end": 141.92,
                            "start": 141.78,
                            "word": "月",
                            "score": 1
                        },
                        {
                            "end": 142.06,
                            "start": 141.92,
                            "word": "的",
                            "score": 0.99
                        },
                        {
                            "end": 142.32,
                            "start": 142.06,
                            "word": "工作",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 142.7,
                    "id": "7064c8844c724f26a49b574419ec56d7",
                    "start": 142.32,
                    "score": 0.84,
                    "text": "謝謝",
                    "words": [
                        {
                            "end": 142.7,
                            "start": 142.32,
                            "word": "謝謝",
                            "score": 0.45
                        }
                    ]
                },
                {
                    "end": 146.46,
                    "id": "dfdc4e9685fd4455815015ec936c5b98",
                    "start": 143.54,
                    "score": 0.84,
                    "text": "我可能不是回答這個問題的合適人權",
                    "words": [
                        {
                            "end": 143.98,
                            "start": 143.54,
                            "word": "我",
                            "score": 0.94
                        },
                        {
                            "end": 144.32,
                            "start": 143.98,
                            "word": "可能",
                            "score": 0.99
                        },
                        {
                            "end": 144.78,
                            "start": 144.32,
                            "word": "不是",
                            "score": 0.97
                        },
                        {
                            "end": 145,
                            "start": 144.78,
                            "word": "回",
                            "score": 1
                        },
                        {
                            "end": 145.12,
                            "start": 145,
                            "word": "答",
                            "score": 1
                        },
                        {
                            "end": 145.32,
                            "start": 145.12,
                            "word": "這個",
                            "score": 0.98
                        },
                        {
                            "end": 145.54,
                            "start": 145.32,
                            "word": "問題",
                            "score": 1
                        },
                        {
                            "end": 145.74,
                            "start": 145.54,
                            "word": "的",
                            "score": 0.96
                        },
                        {
                            "end": 145.88,
                            "start": 145.74,
                            "word": "合",
                            "score": 0.96
                        },
                        {
                            "end": 146.04,
                            "start": 145.88,
                            "word": "適",
                            "score": 0.98
                        },
                        {
                            "end": 146.24,
                            "start": 146.04,
                            "word": "人",
                            "score": 0.99
                        },
                        {
                            "end": 146.46,
                            "start": 146.24,
                            "word": "權",
                            "score": 0.8
                        }
                    ]
                },
                {
                    "end": 149.58,
                    "id": "791e6e1cc89845df9b7215126799118f",
                    "start": 147.02,
                    "score": 0.84,
                    "text": "我覺得我不適合作出評價",
                    "words": [
                        {
                            "end": 147.46,
                            "start": 147.02,
                            "word": "我覺得",
                            "score": 0.49
                        },
                        {
                            "end": 147.86,
                            "start": 147.46,
                            "word": "我不",
                            "score": 0.63
                        },
                        {
                            "end": 148.02,
                            "start": 147.86,
                            "word": "適",
                            "score": 1
                        },
                        {
                            "end": 148.14,
                            "start": 148.02,
                            "word": "合",
                            "score": 1
                        },
                        {
                            "end": 148.28,
                            "start": 148.14,
                            "word": "作",
                            "score": 0.21
                        },
                        {
                            "end": 148.4,
                            "start": 148.28,
                            "word": "出",
                            "score": 0.94
                        },
                        {
                            "end": 148.62,
                            "start": 148.4,
                            "word": "評",
                            "score": 0.98
                        },
                        {
                            "end": 149.58,
                            "start": 148.62,
                            "word": "價",
                            "score": 0.99
                        }
                    ]
                },
                {
                    "end": 151.84,
                    "id": "32b89bef05c94d42b25103be64962854",
                    "start": 150.82,
                    "score": 0.84,
                    "text": "謝謝路透社",
                    "words": [
                        {
                            "end": 151.26,
                            "start": 150.82,
                            "word": "謝謝",
                            "score": 0.7
                        },
                        {
                            "end": 151.48,
                            "start": 151.26,
                            "word": "路",
                            "score": 0.16
                        },
                        {
                            "end": 151.62,
                            "start": 151.48,
                            "word": "透",
                            "score": 0.65
                        },
                        {
                            "end": 151.84,
                            "start": 151.62,
                            "word": "社",
                            "score": 0.86
                        }
                    ]
                },
                {
                    "end": 154.94,
                    "id": "45af3623b04b473e88337dcc4a4ee915",
                    "start": 152.38,
                    "score": 0.84,
                    "text": "想問一下中國政府",
                    "words": [
                        {
                            "end": 152.46,
                            "start": 152.24,
                            "word": "想",
                            "score": 0.94
                        },
                        {
                            "end": 152.62,
                            "start": 152.46,
                            "word": "問",
                            "score": 1
                        },
                        {
                            "end": 153,
                            "start": 152.62,
                            "word": "一下",
                            "score": 1
                        },
                        {
                            "end": 153.98,
                            "start": 153,
                            "word": "中國",
                            "score": 0.66
                        },
                        {
                            "end": 154.94,
                            "start": 153.98,
                            "word": "政府",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 158.2,
                    "id": "96a8465368db499bb1337f05a1135a41",
                    "start": 154.94,
                    "score": 0.84,
                    "text": "希望外界通過 Qin Gang",
                    "words": [
                        {
                            "end": 155.54,
                            "start": 154.94,
                            "word": "希望",
                            "score": 0.98
                        },
                        {
                            "end": 156.66,
                            "start": 155.54,
                            "word": "外",
                            "score": 0.63
                        },
                        {
                            "end": 156.92,
                            "start": 156.66,
                            "word": "界",
                            "score": 1
                        },
                        {
                            "end": 157.5,
                            "start": 156.92,
                            "word": "通",
                            "score": 0.91
                        },
                        {
                            "end": 157.72,
                            "start": 157.5,
                            "word": "過",
                            "score": 1
                        },
                        {
                            "end": 157.96,
                            "start": 157.72,
                            "word": " Qin",
                            "score": 0
                        },
                        {
                            "end": 158.2,
                            "start": 157.96,
                            "word": " Gang",
                            "score": 0.64
                        }
                    ]
                },
                {
                    "end": 161.92,
                    "id": "f718f7167b074aabb969b9dca7ca3635",
                    "start": 158.2,
                    "score": 0.84,
                    "text": "最近這個事情瞭解什麼",
                    "words": [
                        {
                            "end": 159.02,
                            "start": 158.2,
                            "word": "最近",
                            "score": 0.46
                        },
                        {
                            "end": 159.36,
                            "start": 159.02,
                            "word": "這個",
                            "score": 0.96
                        },
                        {
                            "end": 159.74,
                            "start": 159.36,
                            "word": "事情",
                            "score": 0.99
                        },
                        {
                            "end": 161.42,
                            "start": 159.74,
                            "word": "瞭",
                            "score": 0.6
                        },
                        {
                            "end": 161.62,
                            "start": 161.42,
                            "word": "解",
                            "score": 1
                        },
                        {
                            "end": 161.92,
                            "start": 161.62,
                            "word": "什麼",
                            "score": 0.78
                        }
                    ]
                },
                {
                    "end": 162.78,
                    "id": "4df6570b1dd845f2be823a4d9314d58b",
                    "start": 161.92,
                    "score": 0.84,
                    "text": "學到什麼",
                    "words": [
                        {
                            "end": 162.38,
                            "start": 161.92,
                            "word": "學",
                            "score": 0.62
                        },
                        {
                            "end": 162.54,
                            "start": 162.38,
                            "word": "到",
                            "score": 0.98
                        },
                        {
                            "end": 162.78,
                            "start": 162.54,
                            "word": "什麼",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 171.76,
                    "id": "4fa8af39d153483ea3209ce2a0b50ece",
                    "start": 170.39999999999998,
                    "score": 0.89,
                    "text": "這個取決於大家",
                    "words": [
                        {
                            "end": 170.79999999999998,
                            "start": 170.39999999999998,
                            "word": "這個",
                            "score": 0.46
                        },
                        {
                            "end": 171.2,
                            "start": 170.79999999999998,
                            "word": "取",
                            "score": 0.86
                        },
                        {
                            "end": 171.36,
                            "start": 171.2,
                            "word": "決",
                            "score": 0.99
                        },
                        {
                            "end": 171.48,
                            "start": 171.36,
                            "word": "於",
                            "score": 0.99
                        },
                        {
                            "end": 171.76,
                            "start": 171.48,
                            "word": "大家",
                            "score": 0.87
                        }
                    ]
                },
                {
                    "end": 175.06,
                    "id": "211602f75dd145e2b42db02341384252",
                    "start": 173.04,
                    "score": 0.89,
                    "text": "這是中國政府可以決定的嗎",
                    "words": [
                        {
                            "end": 173.44,
                            "start": 173.04,
                            "word": "這是",
                            "score": 0.57
                        },
                        {
                            "end": 173.84,
                            "start": 173.44,
                            "word": "中國",
                            "score": 0.33
                        },
                        {
                            "end": 174.14,
                            "start": 173.84,
                            "word": "政府",
                            "score": 1
                        },
                        {
                            "end": 174.36,
                            "start": 174.14,
                            "word": "可以",
                            "score": 0.98
                        },
                        {
                            "end": 174.56,
                            "start": 174.36,
                            "word": "決",
                            "score": 1
                        },
                        {
                            "end": 174.78,
                            "start": 174.56,
                            "word": "定",
                            "score": 1
                        },
                        {
                            "end": 174.88,
                            "start": 174.78,
                            "word": "的",
                            "score": 0.98
                        },
                        {
                            "end": 175.06,
                            "start": 174.88,
                            "word": "嗎",
                            "score": 0.61
                        }
                    ]
                },
                {
                    "end": 178.38,
                    "id": "32a0744b17e943d0a1e80d9d0461e5f2",
                    "start": 175.64,
                    "score": 0.89,
                    "text": "我們只是正常的發佈了信息",
                    "words": [
                        {
                            "end": 176.04,
                            "start": 175.64,
                            "word": "我們",
                            "score": 0.81
                        },
                        {
                            "end": 176.3,
                            "start": 176.04,
                            "word": "只是",
                            "score": 0.99
                        },
                        {
                            "end": 176.54,
                            "start": 176.3,
                            "word": "正",
                            "score": 1
                        },
                        {
                            "end": 176.74,
                            "start": 176.54,
                            "word": "常",
                            "score": 1
                        },
                        {
                            "end": 176.86,
                            "start": 176.74,
                            "word": "的",
                            "score": 0.51
                        },
                        {
                            "end": 177.02,
                            "start": 176.86,
                            "word": "發",
                            "score": 0.99
                        },
                        {
                            "end": 177.16,
                            "start": 177.02,
                            "word": "佈",
                            "score": 0.84
                        },
                        {
                            "end": 177.3,
                            "start": 177.16,
                            "word": "了",
                            "score": 0.93
                        },
                        {
                            "end": 177.46,
                            "start": 177.3,
                            "word": "信",
                            "score": 0.94
                        },
                        {
                            "end": 178.38,
                            "start": 177.46,
                            "word": "息",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 183.3,
                    "id": "bfedff9aaa0443aab7372e0221e6d23b",
                    "start": 182.22,
                    "score": 0.89,
                    "text": "我能問問你嗎",
                    "words": [
                        {
                            "end": 182.62,
                            "start": 182.22,
                            "word": "我",
                            "score": 0.97
                        },
                        {
                            "end": 182.74,
                            "start": 182.62,
                            "word": "能",
                            "score": 1
                        },
                        {
                            "end": 182.88,
                            "start": 182.74,
                            "word": "問",
                            "score": 1
                        },
                        {
                            "end": 183.06,
                            "start": 182.88,
                            "word": "問",
                            "score": 1
                        },
                        {
                            "end": 183.18,
                            "start": 183.06,
                            "word": "你",
                            "score": 0.96
                        },
                        {
                            "end": 183.3,
                            "start": 183.18,
                            "word": "嗎",
                            "score": 0.85
                        }
                    ]
                },
                {
                    "end": 184.16,
                    "id": "c9218a8d9f4f4f6ab5511216c3dd27f6",
                    "start": 183.3,
                    "score": 0.89,
                    "text": "你瞭解到什麼",
                    "words": [
                        {
                            "end": 183.44,
                            "start": 183.3,
                            "word": "你",
                            "score": 0.74
                        },
                        {
                            "end": 183.6,
                            "start": 183.44,
                            "word": "瞭",
                            "score": 0.72
                        },
                        {
                            "end": 183.74,
                            "start": 183.6,
                            "word": "解",
                            "score": 1
                        },
                        {
                            "end": 183.92,
                            "start": 183.74,
                            "word": "到",
                            "score": 0.9
                        },
                        {
                            "end": 184.16,
                            "start": 183.92,
                            "word": "什麼",
                            "score": 0.87
                        }
                    ]
                },
                {
                    "end": 184.94,
                    "id": "1792100de2d34328b0bab97f9fa25752",
                    "start": 184.16,
                    "score": 0.89,
                    "text": "學到了什麼",
                    "words": [
                        {
                            "end": 184.38,
                            "start": 184.16,
                            "word": "學",
                            "score": 0.85
                        },
                        {
                            "end": 184.6,
                            "start": 184.38,
                            "word": "到了",
                            "score": 0.97
                        },
                        {
                            "end": 184.94,
                            "start": 184.6,
                            "word": "什麼",
                            "score": 0.99
                        }
                    ]
                }
            ],
            "text": "Hi, a question from Reuters. Why was Qin Gang removed from his post of foreign minister? 這個問題新華社已經發佈了消息,你可以查閱 下一個問題 下午好,法新社提問 白郊物榜站為什麼要刪除了所和 Qin Gang 有關的信息,謝謝 外交部網站的信息按照相關管理規定進行更新 十四屆全國人大常委會第四次會議的有關決定 和中華人民共和國主席令表述得很清楚,你可以查閱 謝謝,裏面叫李登山 昨天,全國人大常委會決定免去 Qin Gang 外政的人物 他免去外政的理由是能夠健康為敵嗎? 能夠請教主席的理由 我沒有可以提供的信息 我還是建議你查閱新華社發佈的消息 還是關於 Qin Gang 目前人在哪裡 你有這方面的消息嗎,謝謝 我沒有可以提供的信息 謝謝路透社 再問一下剛才你說新華社的相關報導 已經表達得非常清楚 現在的情況 我理解你說你認為非常清楚 對我們來說還是不太清楚 所以想再問一下 他不是外長這個事情 為什麼你覺得清楚 他清楚在哪裡 謝謝 我已經回答過這個問題 新華社已經發佈了消息 除此之外我沒有更多的信息 下一個問題 那你作為發言人 你如何評價 Qin Gang 就 帶人外交部部長這個七個月的工作 謝謝 我可能不是回答這個問題的合適人權 我覺得我不適合作出評價 謝謝路透社 想問一下中國政府 希望外界通過 Qin Gang 最近這個事情瞭解什麼 學到什麼 這個取決於大家 這是中國政府可以決定的嗎 我們只是正常的發佈了信息 我能問問你嗎 你瞭解到什麼 學到了什麼"
        },
        "translations": []
    },
    {
        "id": "65eb2f3e3cf302abb2808dda",
        "userId": "HLVXZcpb2UYzhX5SNT9w9wBdegw2",
        "status": 2,
        "startTime": 1709911870349255700,
        "endTime": 1709911892568684500,
        "language": "auto",
        "modelSize": "small",
        "task": "transcribe",
        "device": "cpu",
        "fileName": "65eb2f3e3cf302abb2808dda_WHSHPR_BBC_News_",
        "sourceUrl": "https://youtu.be/3ehTFR6UAtg",
        "result": {
            "language": "zh",
            "duration": 191.8896875,
            "segments": [
                {
                    "end": 2.28,
                    "id": "485d696fabce4041b8aa4e1600223be9",
                    "start": 0,
                    "score": 0.7,
                    "text": "Hi, a question from Reuters.",
                    "words": [
                        {
                            "end": 0.84,
                            "start": 0,
                            "word": "Hi,",
                            "score": 0.02
                        },
                        {
                            "end": 1.28,
                            "start": 1.14,
                            "word": " a",
                            "score": 0.67
                        },
                        {
                            "end": 1.52,
                            "start": 1.28,
                            "word": " question",
                            "score": 1
                        },
                        {
                            "end": 1.84,
                            "start": 1.52,
                            "word": " from",
                            "score": 0.97
                        },
                        {
                            "end": 2.08,
                            "start": 1.84,
                            "word": " Re",
                            "score": 0.91
                        },
                        {
                            "end": 2.28,
                            "start": 2.08,
                            "word": "uters.",
                            "score": 0.98
                        }
                    ]
                },
                {
                    "end": 8.66,
                    "id": "19bc4dbaf9974163a1a3a77fb9627ff1",
                    "start": 3.2,
                    "score": 0.7,
                    "text": "Why was Qin Gang removed from his post of foreign minister?",
                    "words": [
                        {
                            "end": 3.68,
                            "start": 3.2,
                            "word": "Why",
                            "score": 0.85
                        },
                        {
                            "end": 3.92,
                            "start": 3.68,
                            "word": " was",
                            "score": 0.97
                        },
                        {
                            "end": 4.18,
                            "start": 3.92,
                            "word": " Qin",
                            "score": 0.23
                        },
                        {
                            "end": 4.56,
                            "start": 4.18,
                            "word": " Gang",
                            "score": 0.72
                        },
                        {
                            "end": 5.24,
                            "start": 4.56,
                            "word": " removed",
                            "score": 0.97
                        },
                        {
                            "end": 5.72,
                            "start": 5.24,
                            "word": " from",
                            "score": 0.97
                        },
                        {
                            "end": 6.26,
                            "start": 5.72,
                            "word": " his",
                            "score": 0.99
                        },
                        {
                            "end": 6.86,
                            "start": 6.26,
                            "word": " post",
                            "score": 0.95
                        },
                        {
                            "end": 7.76,
                            "start": 6.86,
                            "word": " of",
                            "score": 0.91
                        },
                        {
                            "end": 8.22,
                            "start": 7.76,
                            "word": " foreign",
                            "score": 0.61
                        },
                        {
                            "end": 8.66,
                            "start": 8.22,
                            "word": " minister?",
                            "score": 0.96
                        }
                    ]
                },
                {
                    "end": 14.32,
                    "id": "70d42ed58b3f48999bf57f705dc4bb10",
                    "start": 10.98,
                    "score": 0.7,
                    "text": "這個問題新華社已經發佈了消息,你可以查閱",
                    "words": [
                        {
                            "end": 11.3,
                            "start": 10.98,
                            "word": "這個",
                            "score": 0.51
                        },
                        {
                            "end": 11.66,
                            "start": 11.3,
                            "word": "問題",
                            "score": 1
                        },
                        {
                            "end": 12,
                            "start": 11.66,
                            "word": "新",
                            "score": 0.55
                        },
                        {
                            "end": 12.14,
                            "start": 12,
                            "word": "華",
                            "score": 1
                        },
                        {
                            "end": 12.32,
                            "start": 12.14,
                            "word": "社",
                            "score": 1
                        },
                        {
                            "end": 12.56,
                            "start": 12.32,
                            "word": "已經",
                            "score": 0.96
                        },
                        {
                            "end": 12.76,
                            "start": 12.56,
                            "word": "發",
                            "score": 0.99
                        },
                        {
                            "end": 12.9,
                            "start": 12.76,
                            "word": "佈",
                            "score": 0.86
                        },
                        {
                            "end": 13,
                            "start": 12.9,
                            "word": "了",
                            "score": 0.84
                        },
                        {
                            "end": 13.2,
                            "start": 13,
                            "word": "消",
                            "score": 0.98
                        },
                        {
                            "end": 13.44,
                            "start": 13.2,
                            "word": "息,",
                            "score": 1
                        },
                        {
                            "end": 13.82,
                            "start": 13.6,
                            "word": "你可以",
                            "score": 0.8
                        },
                        {
                            "end": 14.16,
                            "start": 13.82,
                            "word": "查",
                            "score": 0.83
                        },
                        {
                            "end": 14.32,
                            "start": 14.16,
                            "word": "閱",
                            "score": 0.95
                        }
                    ]
                },
                {
                    "end": 18.36,
                    "id": "a0130a8910ec48a3a4de822b6db2d527",
                    "start": 17.46,
                    "score": 0.7,
                    "text": "下一個問題",
                    "words": [
                        {
                            "end": 17.94,
                            "start": 17.46,
                            "word": "下",
                            "score": 0.16
                        },
                        {
                            "end": 18.06,
                            "start": 17.94,
                            "word": "一個",
                            "score": 0.99
                        },
                        {
                            "end": 18.36,
                            "start": 18.06,
                            "word": "問題",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 21.06,
                    "id": "5779a91d4f244a5eab9fe73f26873c30",
                    "start": 19.36,
                    "score": 0.7,
                    "text": "下午好,法新社提問",
                    "words": [
                        {
                            "end": 19.84,
                            "start": 19.36,
                            "word": "下",
                            "score": 0.37
                        },
                        {
                            "end": 19.98,
                            "start": 19.84,
                            "word": "午",
                            "score": 0.86
                        },
                        {
                            "end": 20.12,
                            "start": 19.98,
                            "word": "好,",
                            "score": 0.92
                        },
                        {
                            "end": 20.32,
                            "start": 20.22,
                            "word": "法",
                            "score": 0.68
                        },
                        {
                            "end": 20.48,
                            "start": 20.32,
                            "word": "新",
                            "score": 0.51
                        },
                        {
                            "end": 20.66,
                            "start": 20.48,
                            "word": "社",
                            "score": 0.98
                        },
                        {
                            "end": 20.82,
                            "start": 20.66,
                            "word": "提",
                            "score": 0.92
                        },
                        {
                            "end": 21.06,
                            "start": 20.82,
                            "word": "問",
                            "score": 0.89
                        }
                    ]
                },
                {
                    "end": 27.86,
                    "id": "b9077f2eeb2144aa994700764e7f97b5",
                    "start": 21.7,
                    "score": 0.7,
                    "text": "白郊物榜站為什麼要刪除了所和 Qin Gang 有關的信息,謝謝",
                    "words": [
                        {
                            "end": 22.18,
                            "start": 21.7,
                            "word": "白",
                            "score": 0.15
                        },
                        {
                            "end": 22.34,
                            "start": 22.18,
                            "word": "郊",
                            "score": 0.58
                        },
                        {
                            "end": 22.54,
                            "start": 22.34,
                            "word": "物",
                            "score": 0.56
                        },
                        {
                            "end": 22.76,
                            "start": 22.54,
                            "word": "榜",
                            "score": 0.82
                        },
                        {
                            "end": 23.1,
                            "start": 22.76,
                            "word": "站",
                            "score": 0.9
                        },
                        {
                            "end": 23.92,
                            "start": 23.1,
                            "word": "為什麼",
                            "score": 0.67
                        },
                        {
                            "end": 24.26,
                            "start": 23.92,
                            "word": "要",
                            "score": 0.77
                        },
                        {
                            "end": 24.44,
                            "start": 24.26,
                            "word": "刪",
                            "score": 0.86
                        },
                        {
                            "end": 24.82,
                            "start": 24.44,
                            "word": "除",
                            "score": 1
                        },
                        {
                            "end": 25.06,
                            "start": 24.82,
                            "word": "了",
                            "score": 0.98
                        },
                        {
                            "end": 25.44,
                            "start": 25.06,
                            "word": "所",
                            "score": 0.48
                        },
                        {
                            "end": 26.18,
                            "start": 25.44,
                            "word": "和",
                            "score": 0.86
                        },
                        {
                            "end": 26.48,
                            "start": 26.18,
                            "word": " Qin",
                            "score": 0.26
                        },
                        {
                            "end": 26.7,
                            "start": 26.48,
                            "word": " Gang",
                            "score": 0.97
                        },
                        {
                            "end": 26.92,
                            "start": 26.7,
                            "word": " 有",
                            "score": 0.57
                        },
                        {
                            "end": 27.12,
                            "start": 26.92,
                            "word": "關",
                            "score": 0.98
                        },
                        {
                            "end": 27.26,
                            "start": 27.12,
                            "word": "的",
                            "score": 0.99
                        },
                        {
                            "end": 27.42,
                            "start": 27.26,
                            "word": "信",
                            "score": 0.89
                        },
                        {
                            "end": 27.62,
                            "start": 27.42,
                            "word": "息,",
                            "score": 1
                        },
                        {
                            "end": 27.86,
                            "start": 27.72,
                            "word": "謝謝",
                            "score": 0.99
                        }
                    ]
                },
                {
                    "end": 34.86,
                    "id": "b5a1f52a100449439e3cc2a65f0041f4",
                    "start": 29.520000000000003,
                    "score": 0.9,
                    "text": "外交部網站的信息按照相關管理規定進行更新",
                    "words": [
                        {
                            "end": 29.92,
                            "start": 29.520000000000003,
                            "word": "外",
                            "score": 0.03
                        },
                        {
                            "end": 30.06,
                            "start": 29.92,
                            "word": "交",
                            "score": 1
                        },
                        {
                            "end": 30.22,
                            "start": 30.06,
                            "word": "部",
                            "score": 1
                        },
                        {
                            "end": 30.42,
                            "start": 30.22,
                            "word": "網",
                            "score": 0.45
                        },
                        {
                            "end": 30.62,
                            "start": 30.42,
                            "word": "站",
                            "score": 0.91
                        },
                        {
                            "end": 30.86,
                            "start": 30.62,
                            "word": "的",
                            "score": 0.94
                        },
                        {
                            "end": 31.06,
                            "start": 30.86,
                            "word": "信",
                            "score": 0.92
                        },
                        {
                            "end": 31.34,
                            "start": 31.06,
                            "word": "息",
                            "score": 1
                        },
                        {
                            "end": 31.54,
                            "start": 31.34,
                            "word": "按",
                            "score": 0.81
                        },
                        {
                            "end": 31.82,
                            "start": 31.54,
                            "word": "照",
                            "score": 0.99
                        },
                        {
                            "end": 32.12,
                            "start": 31.82,
                            "word": "相",
                            "score": 0.99
                        },
                        {
                            "end": 32.38,
                            "start": 32.12,
                            "word": "關",
                            "score": 1
                        },
                        {
                            "end": 32.62,
                            "start": 32.38,
                            "word": "管",
                            "score": 0.99
                        },
                        {
                            "end": 32.84,
                            "start": 32.62,
                            "word": "理",
                            "score": 1
                        },
                        {
                            "end": 33.06,
                            "start": 32.84,
                            "word": "規",
                            "score": 0.97
                        },
                        {
                            "end": 33.34,
                            "start": 33.06,
                            "word": "定",
                            "score": 1
                        },
                        {
                            "end": 33.66,
                            "start": 33.34,
                            "word": "進",
                            "score": 0.94
                        },
                        {
                            "end": 33.82,
                            "start": 33.66,
                            "word": "行",
                            "score": 1
                        },
                        {
                            "end": 34,
                            "start": 33.82,
                            "word": "更",
                            "score": 1
                        },
                        {
                            "end": 34.86,
                            "start": 34,
                            "word": "新",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 51.36,
                    "id": "317d0a1c1e7d4d9bb43a12803edfa985",
                    "start": 46.88,
                    "score": 0.9,
                    "text": "十四屆全國人大常委會第四次會議的有關決定",
                    "words": [
                        {
                            "end": 47.28,
                            "start": 46.88,
                            "word": "十",
                            "score": 0.21
                        },
                        {
                            "end": 47.68,
                            "start": 47.28,
                            "word": "四",
                            "score": 0.99
                        },
                        {
                            "end": 47.84,
                            "start": 47.68,
                            "word": "屆",
                            "score": 0.99
                        },
                        {
                            "end": 48.12,
                            "start": 47.84,
                            "word": "全",
                            "score": 0.96
                        },
                        {
                            "end": 48.36,
                            "start": 48.12,
                            "word": "國",
                            "score": 0.98
                        },
                        {
                            "end": 48.52,
                            "start": 48.36,
                            "word": "人",
                            "score": 0.99
                        },
                        {
                            "end": 48.68,
                            "start": 48.52,
                            "word": "大",
                            "score": 0.99
                        },
                        {
                            "end": 48.86,
                            "start": 48.68,
                            "word": "常",
                            "score": 0.99
                        },
                        {
                            "end": 49.02,
                            "start": 48.86,
                            "word": "委",
                            "score": 1
                        },
                        {
                            "end": 49.22,
                            "start": 49.02,
                            "word": "會",
                            "score": 1
                        },
                        {
                            "end": 49.46,
                            "start": 49.22,
                            "word": "第",
                            "score": 0.92
                        },
                        {
                            "end": 49.7,
                            "start": 49.46,
                            "word": "四",
                            "score": 0.99
                        },
                        {
                            "end": 49.9,
                            "start": 49.7,
                            "word": "次",
                            "score": 1
                        },
                        {
                            "end": 50.08,
                            "start": 49.9,
                            "word": "會",
                            "score": 1
                        },
                        {
                            "end": 50.2,
                            "start": 50.08,
                            "word": "議",
                            "score": 1
                        },
                        {
                            "end": 50.28,
                            "start": 50.2,
                            "word": "的",
                            "score": 0.91
                        },
                        {
                            "end": 50.38,
                            "start": 50.28,
                            "word": "有",
                            "score": 0.99
                        },
                        {
                            "end": 50.54,
                            "start": 50.38,
                            "word": "關",
                            "score": 1
                        },
                        {
                            "end": 50.76,
                            "start": 50.54,
                            "word": "決",
                            "score": 0.99
                        },
                        {
                            "end": 51.36,
                            "start": 50.76,
                            "word": "定",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 55.56,
                    "id": "de0e28a9793048858aea2f0ea457d814",
                    "start": 51.36,
                    "score": 0.9,
                    "text": "和中華人民共和國主席令表述得很清楚,你可以查閱",
                    "words": [
                        {
                            "end": 51.64,
                            "start": 51.36,
                            "word": "和",
                            "score": 0.95
                        },
                        {
                            "end": 51.9,
                            "start": 51.64,
                            "word": "中",
                            "score": 0.99
                        },
                        {
                            "end": 52.04,
                            "start": 51.9,
                            "word": "華",
                            "score": 1
                        },
                        {
                            "end": 52.24,
                            "start": 52.04,
                            "word": "人民",
                            "score": 1
                        },
                        {
                            "end": 52.5,
                            "start": 52.24,
                            "word": "共",
                            "score": 1
                        },
                        {
                            "end": 52.66,
                            "start": 52.5,
                            "word": "和",
                            "score": 1
                        },
                        {
                            "end": 52.82,
                            "start": 52.66,
                            "word": "國",
                            "score": 1
                        },
                        {
                            "end": 52.98,
                            "start": 52.82,
                            "word": "主",
                            "score": 1
                        },
                        {
                            "end": 53.18,
                            "start": 52.98,
                            "word": "席",
                            "score": 1
                        },
                        {
                            "end": 53.38,
                            "start": 53.18,
                            "word": "令",
                            "score": 0.88
                        },
                        {
                            "end": 53.86,
                            "start": 53.38,
                            "word": "表",
                            "score": 0.94
                        },
                        {
                            "end": 54.04,
                            "start": 53.86,
                            "word": "述",
                            "score": 1
                        },
                        {
                            "end": 54.16,
                            "start": 54.04,
                            "word": "得",
                            "score": 0.87
                        },
                        {
                            "end": 54.34,
                            "start": 54.16,
                            "word": "很",
                            "score": 0.99
                        },
                        {
                            "end": 54.72,
                            "start": 54.34,
                            "word": "清楚,",
                            "score": 1
                        },
                        {
                            "end": 55.08,
                            "start": 54.9,
                            "word": "你可以",
                            "score": 0.79
                        },
                        {
                            "end": 55.4,
                            "start": 55.08,
                            "word": "查",
                            "score": 0.7
                        },
                        {
                            "end": 55.56,
                            "start": 55.4,
                            "word": "閱",
                            "score": 0.97
                        }
                    ]
                },
                {
                    "end": 58.14,
                    "id": "f03ab81efc3344529d9bd8a9188ecd02",
                    "start": 56.82,
                    "score": 0.73,
                    "text": "謝謝,裏面叫李登山",
                    "words": [
                        {
                            "end": 57.18,
                            "start": 56.82,
                            "word": "謝謝,",
                            "score": 0.13
                        },
                        {
                            "end": 57.38,
                            "start": 57.32,
                            "word": "裏",
                            "score": 0.55
                        },
                        {
                            "end": 57.52,
                            "start": 57.38,
                            "word": "面",
                            "score": 0.64
                        },
                        {
                            "end": 57.68,
                            "start": 57.52,
                            "word": "叫",
                            "score": 0.1
                        },
                        {
                            "end": 57.84,
                            "start": 57.68,
                            "word": "李",
                            "score": 0.56
                        },
                        {
                            "end": 57.96,
                            "start": 57.84,
                            "word": "登",
                            "score": 0.51
                        },
                        {
                            "end": 58.14,
                            "start": 57.96,
                            "word": "山",
                            "score": 0.4
                        }
                    ]
                },
                {
                    "end": 63.4,
                    "id": "d7685769c7294c02b092ee1c38b76365",
                    "start": 58.86,
                    "score": 0.73,
                    "text": "昨天,全國人大常委會決定免去 Qin Gang 外政的人物",
                    "words": [
                        {
                            "end": 59.22,
                            "start": 58.86,
                            "word": "昨",
                            "score": 0.74
                        },
                        {
                            "end": 59.48,
                            "start": 59.22,
                            "word": "天,",
                            "score": 0.99
                        },
                        {
                            "end": 59.74,
                            "start": 59.64,
                            "word": "全",
                            "score": 0.27
                        },
                        {
                            "end": 59.9,
                            "start": 59.74,
                            "word": "國",
                            "score": 0.99
                        },
                        {
                            "end": 60.08,
                            "start": 59.9,
                            "word": "人",
                            "score": 0.95
                        },
                        {
                            "end": 60.28,
                            "start": 60.08,
                            "word": "大",
                            "score": 0.01
                        },
                        {
                            "end": 60.5,
                            "start": 60.28,
                            "word": "常",
                            "score": 0.78
                        },
                        {
                            "end": 60.66,
                            "start": 60.5,
                            "word": "委",
                            "score": 1
                        },
                        {
                            "end": 60.92,
                            "start": 60.66,
                            "word": "會",
                            "score": 0.99
                        },
                        {
                            "end": 61.32,
                            "start": 60.92,
                            "word": "決",
                            "score": 0.47
                        },
                        {
                            "end": 61.64,
                            "start": 61.32,
                            "word": "定",
                            "score": 0.99
                        },
                        {
                            "end": 61.88,
                            "start": 61.64,
                            "word": "免",
                            "score": 0.54
                        },
                        {
                            "end": 62.14,
                            "start": 61.88,
                            "word": "去",
                            "score": 0.41
                        },
                        {
                            "end": 62.36,
                            "start": 62.14,
                            "word": " Qin",
                            "score": 0
                        },
                        {
                            "end": 62.5,
                            "start": 62.36,
                            "word": " Gang",
                            "score": 0.35
                        },
                        {
                            "end": 62.68,
                            "start": 62.58,
                            "word": " 外",
                            "score": 0.98
                        },
                        {
                            "end": 62.82,
                            "start": 62.68,
                            "word": "政",
                            "score": 0.21
                        },
                        {
                            "end": 63.06,
                            "start": 62.82,
                            "word": "的人",
                            "score": 0.62
                        },
                        {
                            "end": 63.4,
                            "start": 63.06,
                            "word": "物",
                            "score": 0.63
                        }
                    ]
                },
                {
                    "end": 66.76,
                    "id": "1b3567e2cf3b4fa5b5ebb75e54652d40",
                    "start": 63.8,
                    "score": 0.73,
                    "text": "他免去外政的理由是能夠健康為敵嗎?",
                    "words": [
                        {
                            "end": 64.16,
                            "start": 63.8,
                            "word": "他",
                            "score": 0.48
                        },
                        {
                            "end": 64.32,
                            "start": 64.16,
                            "word": "免",
                            "score": 0.94
                        },
                        {
                            "end": 64.48,
                            "start": 64.32,
                            "word": "去",
                            "score": 0.95
                        },
                        {
                            "end": 64.72,
                            "start": 64.48,
                            "word": "外",
                            "score": 0.99
                        },
                        {
                            "end": 64.88,
                            "start": 64.72,
                            "word": "政",
                            "score": 0.99
                        },
                        {
                            "end": 65.06,
                            "start": 64.88,
                            "word": "的",
                            "score": 0.91
                        },
                        {
                            "end": 65.22,
                            "start": 65.06,
                            "word": "理",
                            "score": 0.98
                        },
                        {
                            "end": 65.36,
                            "start": 65.22,
                            "word": "由",
                            "score": 1
                        },
                        {
                            "end": 65.56,
                            "start": 65.36,
                            "word": "是",
                            "score": 0.92
                        },
                        {
                            "end": 65.7,
                            "start": 65.56,
                            "word": "能",
                            "score": 0.64
                        },
                        {
                            "end": 65.84,
                            "start": 65.7,
                            "word": "夠",
                            "score": 0.69
                        },
                        {
                            "end": 66.02,
                            "start": 65.84,
                            "word": "健",
                            "score": 0.68
                        },
                        {
                            "end": 66.26,
                            "start": 66.02,
                            "word": "康",
                            "score": 1
                        },
                        {
                            "end": 66.46,
                            "start": 66.26,
                            "word": "為",
                            "score": 0.49
                        },
                        {
                            "end": 66.62,
                            "start": 66.46,
                            "word": "敵",
                            "score": 0.59
                        },
                        {
                            "end": 66.76,
                            "start": 66.62,
                            "word": "嗎?",
                            "score": 0.32
                        }
                    ]
                },
                {
                    "end": 69.12,
                    "id": "f9ccc122b8594a8f83501530b8c24ecc",
                    "start": 66.88,
                    "score": 0.73,
                    "text": "能夠請教主席的理由",
                    "words": [
                        {
                            "end": 66.88,
                            "start": 66.88,
                            "word": "能",
                            "score": 0.03
                        },
                        {
                            "end": 67.26,
                            "start": 66.88,
                            "word": "夠",
                            "score": 0.97
                        },
                        {
                            "end": 67.4,
                            "start": 67.26,
                            "word": "請",
                            "score": 0.08
                        },
                        {
                            "end": 67.56,
                            "start": 67.4,
                            "word": "教",
                            "score": 0.84
                        },
                        {
                            "end": 67.98,
                            "start": 67.56,
                            "word": "主",
                            "score": 0.06
                        },
                        {
                            "end": 68.2,
                            "start": 67.98,
                            "word": "席",
                            "score": 0.9
                        },
                        {
                            "end": 68.38,
                            "start": 68.2,
                            "word": "的",
                            "score": 0.74
                        },
                        {
                            "end": 68.84,
                            "start": 68.38,
                            "word": "理",
                            "score": 0.99
                        },
                        {
                            "end": 69.12,
                            "start": 68.84,
                            "word": "由",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 72.34,
                    "id": "c6d1a633b7fe4cb3b83e7c9ee9448b99",
                    "start": 70.54,
                    "score": 0.73,
                    "text": "我沒有可以提供的信息",
                    "words": [
                        {
                            "end": 70.9,
                            "start": 70.54,
                            "word": "我",
                            "score": 0.51
                        },
                        {
                            "end": 71.12,
                            "start": 70.9,
                            "word": "沒有",
                            "score": 0.96
                        },
                        {
                            "end": 71.44,
                            "start": 71.12,
                            "word": "可以",
                            "score": 0.77
                        },
                        {
                            "end": 71.62,
                            "start": 71.44,
                            "word": "提",
                            "score": 1
                        },
                        {
                            "end": 71.76,
                            "start": 71.62,
                            "word": "供",
                            "score": 1
                        },
                        {
                            "end": 71.9,
                            "start": 71.76,
                            "word": "的",
                            "score": 0.98
                        },
                        {
                            "end": 72.06,
                            "start": 71.9,
                            "word": "信",
                            "score": 0.6
                        },
                        {
                            "end": 72.34,
                            "start": 72.06,
                            "word": "息",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 74.56,
                    "id": "19b98bba13ba489b98ee18e67e9318e2",
                    "start": 72.34,
                    "score": 0.73,
                    "text": "我還是建議你查閱新華社發佈的消息",
                    "words": [
                        {
                            "end": 72.62,
                            "start": 72.34,
                            "word": "我",
                            "score": 0.73
                        },
                        {
                            "end": 72.82,
                            "start": 72.62,
                            "word": "還是",
                            "score": 0.98
                        },
                        {
                            "end": 73,
                            "start": 72.82,
                            "word": "建",
                            "score": 0.99
                        },
                        {
                            "end": 73.12,
                            "start": 73,
                            "word": "議",
                            "score": 1
                        },
                        {
                            "end": 73.26,
                            "start": 73.12,
                            "word": "你",
                            "score": 0.35
                        },
                        {
                            "end": 73.36,
                            "start": 73.26,
                            "word": "查",
                            "score": 0.9
                        },
                        {
                            "end": 73.5,
                            "start": 73.36,
                            "word": "閱",
                            "score": 0.98
                        },
                        {
                            "end": 73.66,
                            "start": 73.5,
                            "word": "新",
                            "score": 0.88
                        },
                        {
                            "end": 73.76,
                            "start": 73.66,
                            "word": "華",
                            "score": 0.96
                        },
                        {
                            "end": 73.9,
                            "start": 73.76,
                            "word": "社",
                            "score": 0.99
                        },
                        {
                            "end": 74.08,
                            "start": 73.9,
                            "word": "發",
                            "score": 0.98
                        },
                        {
                            "end": 74.18,
                            "start": 74.08,
                            "word": "佈",
                            "score": 0.85
                        },
                        {
                            "end": 74.3,
                            "start": 74.18,
                            "word": "的",
                            "score": 0.99
                        },
                        {
                            "end": 74.46,
                            "start": 74.3,
                            "word": "消",
                            "score": 0.98
                        },
                        {
                            "end": 74.63999999999999,
                            "start": 74.46,
                            "word": "息",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 80.48,
                    "id": "6e40ed41838747a9949983b998a512dc",
                    "start": 75.7,
                    "score": 0.73,
                    "text": "還是關於 Qin Gang 目前人在哪裡",
                    "words": [
                        {
                            "end": 76.06,
                            "start": 75.7,
                            "word": "還是",
                            "score": 0.84
                        },
                        {
                            "end": 76.28,
                            "start": 76.06,
                            "word": "關",
                            "score": 0.98
                        },
                        {
                            "end": 76.38,
                            "start": 76.28,
                            "word": "於",
                            "score": 0.99
                        },
                        {
                            "end": 76.64,
                            "start": 76.38,
                            "word": " Qin",
                            "score": 0.57
                        },
                        {
                            "end": 76.84,
                            "start": 76.64,
                            "word": " Gang",
                            "score": 0.87
                        },
                        {
                            "end": 79.32,
                            "start": 76.9,
                            "word": " 目前",
                            "score": 0.17
                        },
                        {
                            "end": 79.9,
                            "start": 79.32,
                            "word": "人",
                            "score": 0.78
                        },
                        {
                            "end": 80.16,
                            "start": 79.9,
                            "word": "在",
                            "score": 0.94
                        },
                        {
                            "end": 80.48,
                            "start": 80.16,
                            "word": "哪裡",
                            "score": 0.47
                        }
                    ]
                },
                {
                    "end": 83.6,
                    "id": "831f3fb912924124a66c4a739cf43127",
                    "start": 81.72,
                    "score": 0.73,
                    "text": "你有這方面的消息嗎,謝謝",
                    "words": [
                        {
                            "end": 82.08,
                            "start": 81.72,
                            "word": "你有",
                            "score": 0.15
                        },
                        {
                            "end": 82.44,
                            "start": 82.08,
                            "word": "這",
                            "score": 0.87
                        },
                        {
                            "end": 82.64,
                            "start": 82.44,
                            "word": "方面",
                            "score": 1
                        },
                        {
                            "end": 82.82,
                            "start": 82.64,
                            "word": "的",
                            "score": 1
                        },
                        {
                            "end": 83,
                            "start": 82.82,
                            "word": "消",
                            "score": 0.98
                        },
                        {
                            "end": 83.2,
                            "start": 83,
                            "word": "息",
                            "score": 1
                        },
                        {
                            "end": 83.38,
                            "start": 83.2,
                            "word": "嗎,",
                            "score": 0.91
                        },
                        {
                            "end": 83.6,
                            "start": 83.46,
                            "word": "謝謝",
                            "score": 0.96
                        }
                    ]
                },
                {
                    "end": 85.76,
                    "id": "9fc7e017990e4d6584604cae69f6d842",
                    "start": 83.6,
                    "score": 0.85,
                    "text": "我沒有可以提供的信息",
                    "words": [
                        {
                            "end": 84.44,
                            "start": 83.6,
                            "word": "我",
                            "score": 0.3
                        },
                        {
                            "end": 84.62,
                            "start": 84.44,
                            "word": "沒有",
                            "score": 0.76
                        },
                        {
                            "end": 84.88,
                            "start": 84.62,
                            "word": "可以",
                            "score": 0.88
                        },
                        {
                            "end": 85.04,
                            "start": 84.88,
                            "word": "提",
                            "score": 1
                        },
                        {
                            "end": 85.16,
                            "start": 85.04,
                            "word": "供",
                            "score": 1
                        },
                        {
                            "end": 85.3,
                            "start": 85.16,
                            "word": "的",
                            "score": 0.97
                        },
                        {
                            "end": 85.48,
                            "start": 85.3,
                            "word": "信",
                            "score": 0.92
                        },
                        {
                            "end": 85.76,
                            "start": 85.48,
                            "word": "息",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 87.82,
                    "id": "07151ee95e934a299e8126e44b79ae2b",
                    "start": 86.60000000000001,
                    "score": 0.85,
                    "text": "謝謝路透社",
                    "words": [
                        {
                            "end": 86.92,
                            "start": 86.6,
                            "word": "謝謝",
                            "score": 0.79
                        },
                        {
                            "end": 87.12,
                            "start": 86.92,
                            "word": "路",
                            "score": 0.41
                        },
                        {
                            "end": 87.3,
                            "start": 87.12,
                            "word": "透",
                            "score": 0.98
                        },
                        {
                            "end": 87.82,
                            "start": 87.3,
                            "word": "社",
                            "score": 0.97
                        }
                    ]
                },
                {
                    "end": 93.2,
                    "id": "23712fcc8ee447548d6f7c9539b443aa",
                    "start": 88.60000000000001,
                    "score": 0.85,
                    "text": "再問一下剛才你說新華社的相關報導",
                    "words": [
                        {
                            "end": 89.04,
                            "start": 88.60000000000001,
                            "word": "再",
                            "score": 0.38
                        },
                        {
                            "end": 89.5,
                            "start": 89.04,
                            "word": "問",
                            "score": 0.99
                        },
                        {
                            "end": 89.8,
                            "start": 89.5,
                            "word": "一下",
                            "score": 0.98
                        },
                        {
                            "end": 90.38,
                            "start": 89.8,
                            "word": "剛",
                            "score": 0.6
                        },
                        {
                            "end": 90.58,
                            "start": 90.38,
                            "word": "才",
                            "score": 0.98
                        },
                        {
                            "end": 91.02,
                            "start": 90.58,
                            "word": "你說",
                            "score": 0.77
                        },
                        {
                            "end": 91.72,
                            "start": 91.02,
                            "word": "新",
                            "score": 0.41
                        },
                        {
                            "end": 91.88,
                            "start": 91.72,
                            "word": "華",
                            "score": 1
                        },
                        {
                            "end": 92.12,
                            "start": 91.88,
                            "word": "社",
                            "score": 1
                        },
                        {
                            "end": 92.32,
                            "start": 92.12,
                            "word": "的",
                            "score": 0.92
                        },
                        {
                            "end": 92.68,
                            "start": 92.32,
                            "word": "相",
                            "score": 0.99
                        },
                        {
                            "end": 92.82,
                            "start": 92.68,
                            "word": "關",
                            "score": 1
                        },
                        {
                            "end": 93.2,
                            "start": 92.82,
                            "word": "報導",
                            "score": 0.9
                        }
                    ]
                },
                {
                    "end": 96.56,
                    "id": "ab799582096443fb89427b558536b58c",
                    "start": 93.2,
                    "score": 0.85,
                    "text": "已經表達得非常清楚",
                    "words": [
                        {
                            "end": 94,
                            "start": 93.2,
                            "word": "已經",
                            "score": 0.95
                        },
                        {
                            "end": 95.64,
                            "start": 94,
                            "word": "表",
                            "score": 0.96
                        },
                        {
                            "end": 95.78,
                            "start": 95.64,
                            "word": "達",
                            "score": 1
                        },
                        {
                            "end": 95.9,
                            "start": 95.78,
                            "word": "得",
                            "score": 0.67
                        },
                        {
                            "end": 96.08,
                            "start": 95.9,
                            "word": "非常",
                            "score": 0.99
                        },
                        {
                            "end": 96.56,
                            "start": 96.08,
                            "word": "清楚",
                            "score": 0.85
                        }
                    ]
                },
                {
                    "end": 97.62,
                    "id": "a02db1442cb740d4b2fb01123c2b3699",
                    "start": 96.56,
                    "score": 0.85,
                    "text": "現在的情況",
                    "words": [
                        {
                            "end": 97.16,
                            "start": 96.56,
                            "word": "現在",
                            "score": 0.74
                        },
                        {
                            "end": 97.36,
                            "start": 97.16,
                            "word": "的",
                            "score": 0.85
                        },
                        {
                            "end": 97.62,
                            "start": 97.36,
                            "word": "情況",
                            "score": 0.99
                        }
                    ]
                },
                {
                    "end": 102.68,
                    "id": "1c3be62bc5254843aaeedfeb014f104c",
                    "start": 98.58,
                    "score": 0.85,
                    "text": "我理解你說你認為非常清楚",
                    "words": [
                        {
                            "end": 99.22,
                            "start": 98.58,
                            "word": "我",
                            "score": 0.72
                        },
                        {
                            "end": 99.44,
                            "start": 99.22,
                            "word": "理",
                            "score": 0.99
                        },
                        {
                            "end": 99.72,
                            "start": 99.44,
                            "word": "解",
                            "score": 1
                        },
                        {
                            "end": 101,
                            "start": 99.72,
                            "word": "你說",
                            "score": 0.91
                        },
                        {
                            "end": 101.44,
                            "start": 101,
                            "word": "你",
                            "score": 0.9
                        },
                        {
                            "end": 101.8,
                            "start": 101.44,
                            "word": "認為",
                            "score": 1
                        },
                        {
                            "end": 102.18,
                            "start": 101.8,
                            "word": "非常",
                            "score": 0.99
                        },
                        {
                            "end": 102.68,
                            "start": 102.18,
                            "word": "清楚",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 105.4,
                    "id": "0bae3c0a8d934262b08ca91c8cc403e7",
                    "start": 102.68,
                    "score": 0.85,
                    "text": "對我們來說還是不太清楚",
                    "words": [
                        {
                            "end": 103.7,
                            "start": 102.68,
                            "word": "對",
                            "score": 0.5
                        },
                        {
                            "end": 103.94,
                            "start": 103.7,
                            "word": "我們",
                            "score": 0.67
                        },
                        {
                            "end": 104.34,
                            "start": 103.94,
                            "word": "來說",
                            "score": 1
                        },
                        {
                            "end": 104.66,
                            "start": 104.34,
                            "word": "還是",
                            "score": 0.97
                        },
                        {
                            "end": 104.9,
                            "start": 104.66,
                            "word": "不",
                            "score": 1
                        },
                        {
                            "end": 105.02,
                            "start": 104.9,
                            "word": "太",
                            "score": 1
                        },
                        {
                            "end": 105.4,
                            "start": 105.02,
                            "word": "清楚",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 107.22,
                    "id": "3317ca6122244aa28378107b93684842",
                    "start": 105.4,
                    "score": 0.85,
                    "text": "所以想再問一下",
                    "words": [
                        {
                            "end": 106,
                            "start": 105.4,
                            "word": "所以",
                            "score": 0.84
                        },
                        {
                            "end": 106.26,
                            "start": 106,
                            "word": "想",
                            "score": 0.95
                        },
                        {
                            "end": 106.6,
                            "start": 106.26,
                            "word": "再",
                            "score": 0.98
                        },
                        {
                            "end": 106.78,
                            "start": 106.6,
                            "word": "問",
                            "score": 1
                        },
                        {
                            "end": 107.22,
                            "start": 106.78,
                            "word": "一下",
                            "score": 0.99
                        }
                    ]
                },
                {
                    "end": 111.56,
                    "id": "f7051629892843fd8df774589f204959",
                    "start": 108.78,
                    "score": 0.85,
                    "text": "他不是外長這個事情",
                    "words": [
                        {
                            "end": 109.42,
                            "start": 108.78,
                            "word": "他",
                            "score": 0.5
                        },
                        {
                            "end": 110.06,
                            "start": 109.42,
                            "word": "不是",
                            "score": 0.94
                        },
                        {
                            "end": 110.38,
                            "start": 110.06,
                            "word": "外",
                            "score": 0.99
                        },
                        {
                            "end": 110.6,
                            "start": 110.38,
                            "word": "長",
                            "score": 0.98
                        },
                        {
                            "end": 110.92,
                            "start": 110.6,
                            "word": "這個",
                            "score": 0.91
                        },
                        {
                            "end": 111.56,
                            "start": 110.92,
                            "word": "事情",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 114.52,
                    "id": "131555e570bb4d7c9cfc01716104cc89",
                    "start": 112.53999999999999,
                    "score": 0.86,
                    "text": "為什麼你覺得清楚",
                    "words": [
                        {
                            "end": 113.06,
                            "start": 112.53999999999999,
                            "word": "為什麼",
                            "score": 0.07
                        },
                        {
                            "end": 113.52,
                            "start": 113.06,
                            "word": "你",
                            "score": 0.92
                        },
                        {
                            "end": 114.06,
                            "start": 113.52,
                            "word": "覺得",
                            "score": 0.93
                        },
                        {
                            "end": 114.52,
                            "start": 114.06,
                            "word": "清楚",
                            "score": 0.97
                        }
                    ]
                },
                {
                    "end": 116.3,
                    "id": "ce324be825bc4f7287e1f120ba342255",
                    "start": 114.52,
                    "score": 0.86,
                    "text": "他清楚在哪裡",
                    "words": [
                        {
                            "end": 115.2,
                            "start": 114.52,
                            "word": "他",
                            "score": 0.36
                        },
                        {
                            "end": 115.62,
                            "start": 115.2,
                            "word": "清楚",
                            "score": 0.97
                        },
                        {
                            "end": 115.96,
                            "start": 115.62,
                            "word": "在",
                            "score": 0.99
                        },
                        {
                            "end": 116.3,
                            "start": 115.96,
                            "word": "哪裡",
                            "score": 0.92
                        }
                    ]
                },
                {
                    "end": 116.84,
                    "id": "1428525b8f5f40969726ee081619a978",
                    "start": 116.3,
                    "score": 0.86,
                    "text": "謝謝",
                    "words": [
                        {
                            "end": 116.84,
                            "start": 116.3,
                            "word": "謝謝",
                            "score": 0.65
                        }
                    ]
                },
                {
                    "end": 120.68,
                    "id": "f4a728b7d92f42bab61119dbd7b9097b",
                    "start": 118.74000000000001,
                    "score": 0.86,
                    "text": "我已經回答過這個問題",
                    "words": [
                        {
                            "end": 119.26,
                            "start": 118.74000000000001,
                            "word": "我",
                            "score": 0.93
                        },
                        {
                            "end": 119.46,
                            "start": 119.26,
                            "word": "已經",
                            "score": 0.99
                        },
                        {
                            "end": 119.66,
                            "start": 119.46,
                            "word": "回",
                            "score": 1
                        },
                        {
                            "end": 119.82,
                            "start": 119.66,
                            "word": "答",
                            "score": 1
                        },
                        {
                            "end": 119.98,
                            "start": 119.82,
                            "word": "過",
                            "score": 0.87
                        },
                        {
                            "end": 120.2,
                            "start": 119.98,
                            "word": "這個",
                            "score": 0.98
                        },
                        {
                            "end": 120.68,
                            "start": 120.2,
                            "word": "問題",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 123.52,
                    "id": "c34d2c93d12f4735a09cc7fa533f90e7",
                    "start": 120.68,
                    "score": 0.86,
                    "text": "新華社已經發佈了消息",
                    "words": [
                        {
                            "end": 121.54,
                            "start": 120.68,
                            "word": "新",
                            "score": 0.94
                        },
                        {
                            "end": 121.74,
                            "start": 121.54,
                            "word": "華",
                            "score": 1
                        },
                        {
                            "end": 121.98,
                            "start": 121.74,
                            "word": "社",
                            "score": 1
                        },
                        {
                            "end": 122.3,
                            "start": 121.98,
                            "word": "已經",
                            "score": 0.98
                        },
                        {
                            "end": 122.64,
                            "start": 122.3,
                            "word": "發",
                            "score": 0.98
                        },
                        {
                            "end": 122.84,
                            "start": 122.64,
                            "word": "佈",
                            "score": 0.85
                        },
                        {
                            "end": 123,
                            "start": 122.84,
                            "word": "了",
                            "score": 0.93
                        },
                        {
                            "end": 123.2,
                            "start": 123,
                            "word": "消",
                            "score": 1
                        },
                        {
                            "end": 123.52,
                            "start": 123.2,
                            "word": "息",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 126.24,
                    "id": "180d1674e7f84f9f90db6f7194a63cbb",
                    "start": 123.52,
                    "score": 0.86,
                    "text": "除此之外我沒有更多的信息",
                    "words": [
                        {
                            "end": 123.82,
                            "start": 123.52,
                            "word": "除",
                            "score": 0.99
                        },
                        {
                            "end": 124.08,
                            "start": 123.82,
                            "word": "此",
                            "score": 1
                        },
                        {
                            "end": 124.26,
                            "start": 124.08,
                            "word": "之",
                            "score": 1
                        },
                        {
                            "end": 124.42,
                            "start": 124.26,
                            "word": "外",
                            "score": 1
                        },
                        {
                            "end": 124.6,
                            "start": 124.42,
                            "word": "我",
                            "score": 0.85
                        },
                        {
                            "end": 124.78,
                            "start": 124.6,
                            "word": "沒有",
                            "score": 0.99
                        },
                        {
                            "end": 125.04,
                            "start": 124.78,
                            "word": "更",
                            "score": 1
                        },
                        {
                            "end": 125.24,
                            "start": 125.04,
                            "word": "多",
                            "score": 1
                        },
                        {
                            "end": 125.38,
                            "start": 125.24,
                            "word": "的",
                            "score": 0.99
                        },
                        {
                            "end": 125.56,
                            "start": 125.38,
                            "word": "信",
                            "score": 0.9
                        },
                        {
                            "end": 126.24,
                            "start": 125.56,
                            "word": "息",
                            "score": 0.98
                        }
                    ]
                },
                {
                    "end": 129.72,
                    "id": "3b2b66cbdd4a4bbba5bfec966578f943",
                    "start": 128.72,
                    "score": 0.86,
                    "text": "下一個問題",
                    "words": [
                        {
                            "end": 129.24,
                            "start": 128.72,
                            "word": "下",
                            "score": 0.96
                        },
                        {
                            "end": 129.38,
                            "start": 129.24,
                            "word": "一個",
                            "score": 0.98
                        },
                        {
                            "end": 129.72,
                            "start": 129.38,
                            "word": "問題",
                            "score": 0.99
                        }
                    ]
                },
                {
                    "end": 135.46,
                    "id": "b886078435764a0bb1a8f448a34cfc3b",
                    "start": 133.7,
                    "score": 0.86,
                    "text": "那你作為發言人",
                    "words": [
                        {
                            "end": 134.22,
                            "start": 133.7,
                            "word": "那",
                            "score": 0.68
                        },
                        {
                            "end": 134.42,
                            "start": 134.22,
                            "word": "你",
                            "score": 0.95
                        },
                        {
                            "end": 134.8,
                            "start": 134.42,
                            "word": "作",
                            "score": 0.95
                        },
                        {
                            "end": 134.98,
                            "start": 134.8,
                            "word": "為",
                            "score": 1
                        },
                        {
                            "end": 135.16,
                            "start": 134.98,
                            "word": "發",
                            "score": 0.88
                        },
                        {
                            "end": 135.28,
                            "start": 135.16,
                            "word": "言",
                            "score": 0.92
                        },
                        {
                            "end": 135.46,
                            "start": 135.28,
                            "word": "人",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 139.38,
                    "id": "21adcc4ee960486b976d866bfa4ca26e",
                    "start": 135.46,
                    "score": 0.86,
                    "text": "你如何評價 Qin Gang 就",
                    "words": [
                        {
                            "end": 135.7,
                            "start": 135.46,
                            "word": "你",
                            "score": 0.89
                        },
                        {
                            "end": 137.38,
                            "start": 135.7,
                            "word": "如何",
                            "score": 0.52
                        },
                        {
                            "end": 137.76,
                            "start": 137.38,
                            "word": "評",
                            "score": 0.87
                        },
                        {
                            "end": 138.02,
                            "start": 137.76,
                            "word": "價",
                            "score": 1
                        },
                        {
                            "end": 138.34,
                            "start": 138.02,
                            "word": " Qin",
                            "score": 0
                        },
                        {
                            "end": 138.68,
                            "start": 138.34,
                            "word": " Gang",
                            "score": 0.81
                        },
                        {
                            "end": 139.38,
                            "start": 138.68,
                            "word": " 就",
                            "score": 0.15
                        }
                    ]
                },
                {
                    "end": 142.32,
                    "id": "67f828bc0e034435a73739ddceb694b6",
                    "start": 139.38,
                    "score": 0.84,
                    "text": "帶人外交部部長這個七個月的工作",
                    "words": [
                        {
                            "end": 139.88,
                            "start": 139.38,
                            "word": "帶",
                            "score": 0.02
                        },
                        {
                            "end": 140.02,
                            "start": 139.88,
                            "word": "人",
                            "score": 0.76
                        },
                        {
                            "end": 140.22,
                            "start": 140.02,
                            "word": "外",
                            "score": 0.92
                        },
                        {
                            "end": 140.36,
                            "start": 140.22,
                            "word": "交",
                            "score": 0.99
                        },
                        {
                            "end": 140.52,
                            "start": 140.36,
                            "word": "部",
                            "score": 0.8
                        },
                        {
                            "end": 140.72,
                            "start": 140.52,
                            "word": "部",
                            "score": 0.37
                        },
                        {
                            "end": 140.86,
                            "start": 140.72,
                            "word": "長",
                            "score": 0.97
                        },
                        {
                            "end": 141.14,
                            "start": 140.86,
                            "word": "這個",
                            "score": 0.54
                        },
                        {
                            "end": 141.66,
                            "start": 141.14,
                            "word": "七",
                            "score": 0.66
                        },
                        {
                            "end": 141.78,
                            "start": 141.66,
                            "word": "個",
                            "score": 1
                        },
                        {
                            "end": 141.92,
                            "start": 141.78,
                            "word": "月",
                            "score": 1
                        },
                        {
                            "end": 142.06,
                            "start": 141.92,
                            "word": "的",
                            "score": 0.99
                        },
                        {
                            "end": 142.32,
                            "start": 142.06,
                            "word": "工作",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 142.7,
                    "id": "aeb1ee97a11140409dfebb8c4e3753f0",
                    "start": 142.32,
                    "score": 0.84,
                    "text": "謝謝",
                    "words": [
                        {
                            "end": 142.7,
                            "start": 142.32,
                            "word": "謝謝",
                            "score": 0.45
                        }
                    ]
                },
                {
                    "end": 146.46,
                    "id": "f56ea0b8d2b7407fa5647298761b55fd",
                    "start": 143.54,
                    "score": 0.84,
                    "text": "我可能不是回答這個問題的合適人權",
                    "words": [
                        {
                            "end": 143.98,
                            "start": 143.54,
                            "word": "我",
                            "score": 0.94
                        },
                        {
                            "end": 144.32,
                            "start": 143.98,
                            "word": "可能",
                            "score": 0.99
                        },
                        {
                            "end": 144.78,
                            "start": 144.32,
                            "word": "不是",
                            "score": 0.97
                        },
                        {
                            "end": 145,
                            "start": 144.78,
                            "word": "回",
                            "score": 1
                        },
                        {
                            "end": 145.12,
                            "start": 145,
                            "word": "答",
                            "score": 1
                        },
                        {
                            "end": 145.32,
                            "start": 145.12,
                            "word": "這個",
                            "score": 0.98
                        },
                        {
                            "end": 145.54,
                            "start": 145.32,
                            "word": "問題",
                            "score": 1
                        },
                        {
                            "end": 145.74,
                            "start": 145.54,
                            "word": "的",
                            "score": 0.96
                        },
                        {
                            "end": 145.88,
                            "start": 145.74,
                            "word": "合",
                            "score": 0.96
                        },
                        {
                            "end": 146.04,
                            "start": 145.88,
                            "word": "適",
                            "score": 0.98
                        },
                        {
                            "end": 146.24,
                            "start": 146.04,
                            "word": "人",
                            "score": 0.99
                        },
                        {
                            "end": 146.46,
                            "start": 146.24,
                            "word": "權",
                            "score": 0.8
                        }
                    ]
                },
                {
                    "end": 149.58,
                    "id": "ae2373a573c54a4e8d0291b2a8b8b8aa",
                    "start": 147.02,
                    "score": 0.84,
                    "text": "我覺得我不適合作出評價",
                    "words": [
                        {
                            "end": 147.46,
                            "start": 147.02,
                            "word": "我覺得",
                            "score": 0.49
                        },
                        {
                            "end": 147.86,
                            "start": 147.46,
                            "word": "我不",
                            "score": 0.63
                        },
                        {
                            "end": 148.02,
                            "start": 147.86,
                            "word": "適",
                            "score": 1
                        },
                        {
                            "end": 148.14,
                            "start": 148.02,
                            "word": "合",
                            "score": 1
                        },
                        {
                            "end": 148.28,
                            "start": 148.14,
                            "word": "作",
                            "score": 0.21
                        },
                        {
                            "end": 148.4,
                            "start": 148.28,
                            "word": "出",
                            "score": 0.94
                        },
                        {
                            "end": 148.62,
                            "start": 148.4,
                            "word": "評",
                            "score": 0.98
                        },
                        {
                            "end": 149.58,
                            "start": 148.62,
                            "word": "價",
                            "score": 0.99
                        }
                    ]
                },
                {
                    "end": 151.84,
                    "id": "de91faaaadaa4d03b550530fc5864671",
                    "start": 150.82,
                    "score": 0.84,
                    "text": "謝謝路透社",
                    "words": [
                        {
                            "end": 151.26,
                            "start": 150.82,
                            "word": "謝謝",
                            "score": 0.7
                        },
                        {
                            "end": 151.48,
                            "start": 151.26,
                            "word": "路",
                            "score": 0.16
                        },
                        {
                            "end": 151.62,
                            "start": 151.48,
                            "word": "透",
                            "score": 0.65
                        },
                        {
                            "end": 151.84,
                            "start": 151.62,
                            "word": "社",
                            "score": 0.86
                        }
                    ]
                },
                {
                    "end": 154.94,
                    "id": "830c2e5f08d041069e9bee445c9ce506",
                    "start": 152.38,
                    "score": 0.84,
                    "text": "想問一下中國政府",
                    "words": [
                        {
                            "end": 152.46,
                            "start": 152.24,
                            "word": "想",
                            "score": 0.94
                        },
                        {
                            "end": 152.62,
                            "start": 152.46,
                            "word": "問",
                            "score": 1
                        },
                        {
                            "end": 153,
                            "start": 152.62,
                            "word": "一下",
                            "score": 1
                        },
                        {
                            "end": 153.98,
                            "start": 153,
                            "word": "中國",
                            "score": 0.66
                        },
                        {
                            "end": 154.94,
                            "start": 153.98,
                            "word": "政府",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 158.2,
                    "id": "75b84ef2ada840bdba3eebb4a4453020",
                    "start": 154.94,
                    "score": 0.84,
                    "text": "希望外界通過 Qin Gang",
                    "words": [
                        {
                            "end": 155.54,
                            "start": 154.94,
                            "word": "希望",
                            "score": 0.98
                        },
                        {
                            "end": 156.66,
                            "start": 155.54,
                            "word": "外",
                            "score": 0.63
                        },
                        {
                            "end": 156.92,
                            "start": 156.66,
                            "word": "界",
                            "score": 1
                        },
                        {
                            "end": 157.5,
                            "start": 156.92,
                            "word": "通",
                            "score": 0.91
                        },
                        {
                            "end": 157.72,
                            "start": 157.5,
                            "word": "過",
                            "score": 1
                        },
                        {
                            "end": 157.96,
                            "start": 157.72,
                            "word": " Qin",
                            "score": 0
                        },
                        {
                            "end": 158.2,
                            "start": 157.96,
                            "word": " Gang",
                            "score": 0.64
                        }
                    ]
                },
                {
                    "end": 161.92,
                    "id": "c3a154e27c2d41ada0e8d77f66bc43c0",
                    "start": 158.2,
                    "score": 0.84,
                    "text": "最近這個事情瞭解什麼",
                    "words": [
                        {
                            "end": 159.02,
                            "start": 158.2,
                            "word": "最近",
                            "score": 0.46
                        },
                        {
                            "end": 159.36,
                            "start": 159.02,
                            "word": "這個",
                            "score": 0.96
                        },
                        {
                            "end": 159.74,
                            "start": 159.36,
                            "word": "事情",
                            "score": 0.99
                        },
                        {
                            "end": 161.42,
                            "start": 159.74,
                            "word": "瞭",
                            "score": 0.6
                        },
                        {
                            "end": 161.62,
                            "start": 161.42,
                            "word": "解",
                            "score": 1
                        },
                        {
                            "end": 161.92,
                            "start": 161.62,
                            "word": "什麼",
                            "score": 0.78
                        }
                    ]
                },
                {
                    "end": 162.78,
                    "id": "a82d8730b31a48c7bbb584e8e93a7d48",
                    "start": 161.92,
                    "score": 0.84,
                    "text": "學到什麼",
                    "words": [
                        {
                            "end": 162.38,
                            "start": 161.92,
                            "word": "學",
                            "score": 0.62
                        },
                        {
                            "end": 162.54,
                            "start": 162.38,
                            "word": "到",
                            "score": 0.98
                        },
                        {
                            "end": 162.78,
                            "start": 162.54,
                            "word": "什麼",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 171.76,
                    "id": "3452dd2c028246c2abf3868e5e7773ef",
                    "start": 170.39999999999998,
                    "score": 0.89,
                    "text": "這個取決於大家",
                    "words": [
                        {
                            "end": 170.79999999999998,
                            "start": 170.39999999999998,
                            "word": "這個",
                            "score": 0.46
                        },
                        {
                            "end": 171.2,
                            "start": 170.79999999999998,
                            "word": "取",
                            "score": 0.86
                        },
                        {
                            "end": 171.36,
                            "start": 171.2,
                            "word": "決",
                            "score": 0.99
                        },
                        {
                            "end": 171.48,
                            "start": 171.36,
                            "word": "於",
                            "score": 0.99
                        },
                        {
                            "end": 171.76,
                            "start": 171.48,
                            "word": "大家",
                            "score": 0.87
                        }
                    ]
                },
                {
                    "end": 175.06,
                    "id": "69ebdbe84226420c8cb5fa3db738f1e5",
                    "start": 173.04,
                    "score": 0.89,
                    "text": "這是中國政府可以決定的嗎",
                    "words": [
                        {
                            "end": 173.44,
                            "start": 173.04,
                            "word": "這是",
                            "score": 0.57
                        },
                        {
                            "end": 173.84,
                            "start": 173.44,
                            "word": "中國",
                            "score": 0.33
                        },
                        {
                            "end": 174.14,
                            "start": 173.84,
                            "word": "政府",
                            "score": 1
                        },
                        {
                            "end": 174.36,
                            "start": 174.14,
                            "word": "可以",
                            "score": 0.98
                        },
                        {
                            "end": 174.56,
                            "start": 174.36,
                            "word": "決",
                            "score": 1
                        },
                        {
                            "end": 174.78,
                            "start": 174.56,
                            "word": "定",
                            "score": 1
                        },
                        {
                            "end": 174.88,
                            "start": 174.78,
                            "word": "的",
                            "score": 0.98
                        },
                        {
                            "end": 175.06,
                            "start": 174.88,
                            "word": "嗎",
                            "score": 0.61
                        }
                    ]
                },
                {
                    "end": 178.38,
                    "id": "0d099e5d28774b108121d8f007bfd897",
                    "start": 175.64,
                    "score": 0.89,
                    "text": "我們只是正常的發佈了信息",
                    "words": [
                        {
                            "end": 176.04,
                            "start": 175.64,
                            "word": "我們",
                            "score": 0.81
                        },
                        {
                            "end": 176.3,
                            "start": 176.04,
                            "word": "只是",
                            "score": 0.99
                        },
                        {
                            "end": 176.54,
                            "start": 176.3,
                            "word": "正",
                            "score": 1
                        },
                        {
                            "end": 176.74,
                            "start": 176.54,
                            "word": "常",
                            "score": 1
                        },
                        {
                            "end": 176.86,
                            "start": 176.74,
                            "word": "的",
                            "score": 0.51
                        },
                        {
                            "end": 177.02,
                            "start": 176.86,
                            "word": "發",
                            "score": 0.99
                        },
                        {
                            "end": 177.16,
                            "start": 177.02,
                            "word": "佈",
                            "score": 0.84
                        },
                        {
                            "end": 177.3,
                            "start": 177.16,
                            "word": "了",
                            "score": 0.93
                        },
                        {
                            "end": 177.46,
                            "start": 177.3,
                            "word": "信",
                            "score": 0.94
                        },
                        {
                            "end": 178.38,
                            "start": 177.46,
                            "word": "息",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 183.3,
                    "id": "268fd67044a544f8a923e36553292558",
                    "start": 182.22,
                    "score": 0.89,
                    "text": "我能問問你嗎",
                    "words": [
                        {
                            "end": 182.62,
                            "start": 182.22,
                            "word": "我",
                            "score": 0.97
                        },
                        {
                            "end": 182.74,
                            "start": 182.62,
                            "word": "能",
                            "score": 1
                        },
                        {
                            "end": 182.88,
                            "start": 182.74,
                            "word": "問",
                            "score": 1
                        },
                        {
                            "end": 183.06,
                            "start": 182.88,
                            "word": "問",
                            "score": 1
                        },
                        {
                            "end": 183.18,
                            "start": 183.06,
                            "word": "你",
                            "score": 0.96
                        },
                        {
                            "end": 183.3,
                            "start": 183.18,
                            "word": "嗎",
                            "score": 0.85
                        }
                    ]
                },
                {
                    "end": 184.16,
                    "id": "2844ba6a5b6547ddaf214a332c17b529",
                    "start": 183.3,
                    "score": 0.89,
                    "text": "你瞭解到什麼",
                    "words": [
                        {
                            "end": 183.44,
                            "start": 183.3,
                            "word": "你",
                            "score": 0.74
                        },
                        {
                            "end": 183.6,
                            "start": 183.44,
                            "word": "瞭",
                            "score": 0.72
                        },
                        {
                            "end": 183.74,
                            "start": 183.6,
                            "word": "解",
                            "score": 1
                        },
                        {
                            "end": 183.92,
                            "start": 183.74,
                            "word": "到",
                            "score": 0.9
                        },
                        {
                            "end": 184.16,
                            "start": 183.92,
                            "word": "什麼",
                            "score": 0.87
                        }
                    ]
                },
                {
                    "end": 184.94,
                    "id": "74ad21eb510248698c44bdcba86c07bc",
                    "start": 184.16,
                    "score": 0.89,
                    "text": "學到了什麼",
                    "words": [
                        {
                            "end": 184.38,
                            "start": 184.16,
                            "word": "學",
                            "score": 0.85
                        },
                        {
                            "end": 184.6,
                            "start": 184.38,
                            "word": "到了",
                            "score": 0.97
                        },
                        {
                            "end": 184.94,
                            "start": 184.6,
                            "word": "什麼",
                            "score": 0.99
                        }
                    ]
                }
            ],
            "text": "Hi, a question from Reuters. Why was Qin Gang removed from his post of foreign minister? 這個問題新華社已經發佈了消息,你可以查閱 下一個問題 下午好,法新社提問 白郊物榜站為什麼要刪除了所和 Qin Gang 有關的信息,謝謝 外交部網站的信息按照相關管理規定進行更新 十四屆全國人大常委會第四次會議的有關決定 和中華人民共和國主席令表述得很清楚,你可以查閱 謝謝,裏面叫李登山 昨天,全國人大常委會決定免去 Qin Gang 外政的人物 他免去外政的理由是能夠健康為敵嗎? 能夠請教主席的理由 我沒有可以提供的信息 我還是建議你查閱新華社發佈的消息 還是關於 Qin Gang 目前人在哪裡 你有這方面的消息嗎,謝謝 我沒有可以提供的信息 謝謝路透社 再問一下剛才你說新華社的相關報導 已經表達得非常清楚 現在的情況 我理解你說你認為非常清楚 對我們來說還是不太清楚 所以想再問一下 他不是外長這個事情 為什麼你覺得清楚 他清楚在哪裡 謝謝 我已經回答過這個問題 新華社已經發佈了消息 除此之外我沒有更多的信息 下一個問題 那你作為發言人 你如何評價 Qin Gang 就 帶人外交部部長這個七個月的工作 謝謝 我可能不是回答這個問題的合適人權 我覺得我不適合作出評價 謝謝路透社 想問一下中國政府 希望外界通過 Qin Gang 最近這個事情瞭解什麼 學到什麼 這個取決於大家 這是中國政府可以決定的嗎 我們只是正常的發佈了信息 我能問問你嗎 你瞭解到什麼 學到了什麼"
        },
        "translations": []
    },
    {
        "id": "65eb2f9c3cf302abb2808ddb",
        "userId": "HLVXZcpb2UYzhX5SNT9w9wBdegw2",
        "status": 2,
        "startTime": 1709911964766198800,
        "endTime": 1709911987016110600,
        "language": "auto",
        "modelSize": "small",
        "task": "transcribe",
        "device": "cpu",
        "fileName": "65eb2f9c3cf302abb2808ddb_WHSHPR_BBC_News_",
        "sourceUrl": "https://youtu.be/3ehTFR6UAtg",
        "result": {
            "language": "zh",
            "duration": 191.8896875,
            "segments": [
                {
                    "end": 2.28,
                    "id": "d9d4cd5b303a437ebe6e462c78a1965b",
                    "start": 0,
                    "score": 0.7,
                    "text": "Hi, a question from Reuters.",
                    "words": [
                        {
                            "end": 0.84,
                            "start": 0,
                            "word": "Hi,",
                            "score": 0.02
                        },
                        {
                            "end": 1.28,
                            "start": 1.14,
                            "word": " a",
                            "score": 0.67
                        },
                        {
                            "end": 1.52,
                            "start": 1.28,
                            "word": " question",
                            "score": 1
                        },
                        {
                            "end": 1.84,
                            "start": 1.52,
                            "word": " from",
                            "score": 0.97
                        },
                        {
                            "end": 2.08,
                            "start": 1.84,
                            "word": " Re",
                            "score": 0.91
                        },
                        {
                            "end": 2.28,
                            "start": 2.08,
                            "word": "uters.",
                            "score": 0.98
                        }
                    ]
                },
                {
                    "end": 8.66,
                    "id": "54e444163ee7475ab81241bb830bb885",
                    "start": 3.2,
                    "score": 0.7,
                    "text": "Why was Qin Gang removed from his post of foreign minister?",
                    "words": [
                        {
                            "end": 3.68,
                            "start": 3.2,
                            "word": "Why",
                            "score": 0.85
                        },
                        {
                            "end": 3.92,
                            "start": 3.68,
                            "word": " was",
                            "score": 0.97
                        },
                        {
                            "end": 4.18,
                            "start": 3.92,
                            "word": " Qin",
                            "score": 0.23
                        },
                        {
                            "end": 4.56,
                            "start": 4.18,
                            "word": " Gang",
                            "score": 0.72
                        },
                        {
                            "end": 5.24,
                            "start": 4.56,
                            "word": " removed",
                            "score": 0.97
                        },
                        {
                            "end": 5.72,
                            "start": 5.24,
                            "word": " from",
                            "score": 0.97
                        },
                        {
                            "end": 6.26,
                            "start": 5.72,
                            "word": " his",
                            "score": 0.99
                        },
                        {
                            "end": 6.86,
                            "start": 6.26,
                            "word": " post",
                            "score": 0.95
                        },
                        {
                            "end": 7.76,
                            "start": 6.86,
                            "word": " of",
                            "score": 0.91
                        },
                        {
                            "end": 8.22,
                            "start": 7.76,
                            "word": " foreign",
                            "score": 0.61
                        },
                        {
                            "end": 8.66,
                            "start": 8.22,
                            "word": " minister?",
                            "score": 0.96
                        }
                    ]
                },
                {
                    "end": 14.32,
                    "id": "b66be746af184e28b05fde196971993d",
                    "start": 10.98,
                    "score": 0.7,
                    "text": "這個問題新華社已經發佈了消息,你可以查閱",
                    "words": [
                        {
                            "end": 11.3,
                            "start": 10.98,
                            "word": "這個",
                            "score": 0.51
                        },
                        {
                            "end": 11.66,
                            "start": 11.3,
                            "word": "問題",
                            "score": 1
                        },
                        {
                            "end": 12,
                            "start": 11.66,
                            "word": "新",
                            "score": 0.55
                        },
                        {
                            "end": 12.14,
                            "start": 12,
                            "word": "華",
                            "score": 1
                        },
                        {
                            "end": 12.32,
                            "start": 12.14,
                            "word": "社",
                            "score": 1
                        },
                        {
                            "end": 12.56,
                            "start": 12.32,
                            "word": "已經",
                            "score": 0.96
                        },
                        {
                            "end": 12.76,
                            "start": 12.56,
                            "word": "發",
                            "score": 0.99
                        },
                        {
                            "end": 12.9,
                            "start": 12.76,
                            "word": "佈",
                            "score": 0.86
                        },
                        {
                            "end": 13,
                            "start": 12.9,
                            "word": "了",
                            "score": 0.84
                        },
                        {
                            "end": 13.2,
                            "start": 13,
                            "word": "消",
                            "score": 0.98
                        },
                        {
                            "end": 13.44,
                            "start": 13.2,
                            "word": "息,",
                            "score": 1
                        },
                        {
                            "end": 13.82,
                            "start": 13.6,
                            "word": "你可以",
                            "score": 0.8
                        },
                        {
                            "end": 14.16,
                            "start": 13.82,
                            "word": "查",
                            "score": 0.83
                        },
                        {
                            "end": 14.32,
                            "start": 14.16,
                            "word": "閱",
                            "score": 0.95
                        }
                    ]
                },
                {
                    "end": 18.36,
                    "id": "be86d9c2a02945b18528554ee659049b",
                    "start": 17.46,
                    "score": 0.7,
                    "text": "下一個問題",
                    "words": [
                        {
                            "end": 17.94,
                            "start": 17.46,
                            "word": "下",
                            "score": 0.16
                        },
                        {
                            "end": 18.06,
                            "start": 17.94,
                            "word": "一個",
                            "score": 0.99
                        },
                        {
                            "end": 18.36,
                            "start": 18.06,
                            "word": "問題",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 21.06,
                    "id": "cf84d46bbbf64946becf25e4284e245f",
                    "start": 19.36,
                    "score": 0.7,
                    "text": "下午好,法新社提問",
                    "words": [
                        {
                            "end": 19.84,
                            "start": 19.36,
                            "word": "下",
                            "score": 0.37
                        },
                        {
                            "end": 19.98,
                            "start": 19.84,
                            "word": "午",
                            "score": 0.86
                        },
                        {
                            "end": 20.12,
                            "start": 19.98,
                            "word": "好,",
                            "score": 0.92
                        },
                        {
                            "end": 20.32,
                            "start": 20.22,
                            "word": "法",
                            "score": 0.68
                        },
                        {
                            "end": 20.48,
                            "start": 20.32,
                            "word": "新",
                            "score": 0.51
                        },
                        {
                            "end": 20.66,
                            "start": 20.48,
                            "word": "社",
                            "score": 0.98
                        },
                        {
                            "end": 20.82,
                            "start": 20.66,
                            "word": "提",
                            "score": 0.92
                        },
                        {
                            "end": 21.06,
                            "start": 20.82,
                            "word": "問",
                            "score": 0.89
                        }
                    ]
                },
                {
                    "end": 27.86,
                    "id": "4c47bed393b34d24b1c824c4377827b1",
                    "start": 21.7,
                    "score": 0.7,
                    "text": "白郊物榜站為什麼要刪除了所和 Qin Gang 有關的信息,謝謝",
                    "words": [
                        {
                            "end": 22.18,
                            "start": 21.7,
                            "word": "白",
                            "score": 0.15
                        },
                        {
                            "end": 22.34,
                            "start": 22.18,
                            "word": "郊",
                            "score": 0.58
                        },
                        {
                            "end": 22.54,
                            "start": 22.34,
                            "word": "物",
                            "score": 0.56
                        },
                        {
                            "end": 22.76,
                            "start": 22.54,
                            "word": "榜",
                            "score": 0.82
                        },
                        {
                            "end": 23.1,
                            "start": 22.76,
                            "word": "站",
                            "score": 0.9
                        },
                        {
                            "end": 23.92,
                            "start": 23.1,
                            "word": "為什麼",
                            "score": 0.67
                        },
                        {
                            "end": 24.26,
                            "start": 23.92,
                            "word": "要",
                            "score": 0.77
                        },
                        {
                            "end": 24.44,
                            "start": 24.26,
                            "word": "刪",
                            "score": 0.86
                        },
                        {
                            "end": 24.82,
                            "start": 24.44,
                            "word": "除",
                            "score": 1
                        },
                        {
                            "end": 25.06,
                            "start": 24.82,
                            "word": "了",
                            "score": 0.98
                        },
                        {
                            "end": 25.44,
                            "start": 25.06,
                            "word": "所",
                            "score": 0.48
                        },
                        {
                            "end": 26.18,
                            "start": 25.44,
                            "word": "和",
                            "score": 0.86
                        },
                        {
                            "end": 26.48,
                            "start": 26.18,
                            "word": " Qin",
                            "score": 0.26
                        },
                        {
                            "end": 26.7,
                            "start": 26.48,
                            "word": " Gang",
                            "score": 0.97
                        },
                        {
                            "end": 26.92,
                            "start": 26.7,
                            "word": " 有",
                            "score": 0.57
                        },
                        {
                            "end": 27.12,
                            "start": 26.92,
                            "word": "關",
                            "score": 0.98
                        },
                        {
                            "end": 27.26,
                            "start": 27.12,
                            "word": "的",
                            "score": 0.99
                        },
                        {
                            "end": 27.42,
                            "start": 27.26,
                            "word": "信",
                            "score": 0.89
                        },
                        {
                            "end": 27.62,
                            "start": 27.42,
                            "word": "息,",
                            "score": 1
                        },
                        {
                            "end": 27.86,
                            "start": 27.72,
                            "word": "謝謝",
                            "score": 0.99
                        }
                    ]
                },
                {
                    "end": 34.86,
                    "id": "15ca683b3db3417a970c18d7f6961e34",
                    "start": 29.520000000000003,
                    "score": 0.9,
                    "text": "外交部網站的信息按照相關管理規定進行更新",
                    "words": [
                        {
                            "end": 29.92,
                            "start": 29.520000000000003,
                            "word": "外",
                            "score": 0.03
                        },
                        {
                            "end": 30.06,
                            "start": 29.92,
                            "word": "交",
                            "score": 1
                        },
                        {
                            "end": 30.22,
                            "start": 30.06,
                            "word": "部",
                            "score": 1
                        },
                        {
                            "end": 30.42,
                            "start": 30.22,
                            "word": "網",
                            "score": 0.45
                        },
                        {
                            "end": 30.62,
                            "start": 30.42,
                            "word": "站",
                            "score": 0.91
                        },
                        {
                            "end": 30.86,
                            "start": 30.62,
                            "word": "的",
                            "score": 0.94
                        },
                        {
                            "end": 31.06,
                            "start": 30.86,
                            "word": "信",
                            "score": 0.92
                        },
                        {
                            "end": 31.34,
                            "start": 31.06,
                            "word": "息",
                            "score": 1
                        },
                        {
                            "end": 31.54,
                            "start": 31.34,
                            "word": "按",
                            "score": 0.81
                        },
                        {
                            "end": 31.82,
                            "start": 31.54,
                            "word": "照",
                            "score": 0.99
                        },
                        {
                            "end": 32.12,
                            "start": 31.82,
                            "word": "相",
                            "score": 0.99
                        },
                        {
                            "end": 32.38,
                            "start": 32.12,
                            "word": "關",
                            "score": 1
                        },
                        {
                            "end": 32.62,
                            "start": 32.38,
                            "word": "管",
                            "score": 0.99
                        },
                        {
                            "end": 32.84,
                            "start": 32.62,
                            "word": "理",
                            "score": 1
                        },
                        {
                            "end": 33.06,
                            "start": 32.84,
                            "word": "規",
                            "score": 0.97
                        },
                        {
                            "end": 33.34,
                            "start": 33.06,
                            "word": "定",
                            "score": 1
                        },
                        {
                            "end": 33.66,
                            "start": 33.34,
                            "word": "進",
                            "score": 0.94
                        },
                        {
                            "end": 33.82,
                            "start": 33.66,
                            "word": "行",
                            "score": 1
                        },
                        {
                            "end": 34,
                            "start": 33.82,
                            "word": "更",
                            "score": 1
                        },
                        {
                            "end": 34.86,
                            "start": 34,
                            "word": "新",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 51.36,
                    "id": "072378a83f5c4a559588cc5abf4ab186",
                    "start": 46.88,
                    "score": 0.9,
                    "text": "十四屆全國人大常委會第四次會議的有關決定",
                    "words": [
                        {
                            "end": 47.28,
                            "start": 46.88,
                            "word": "十",
                            "score": 0.21
                        },
                        {
                            "end": 47.68,
                            "start": 47.28,
                            "word": "四",
                            "score": 0.99
                        },
                        {
                            "end": 47.84,
                            "start": 47.68,
                            "word": "屆",
                            "score": 0.99
                        },
                        {
                            "end": 48.12,
                            "start": 47.84,
                            "word": "全",
                            "score": 0.96
                        },
                        {
                            "end": 48.36,
                            "start": 48.12,
                            "word": "國",
                            "score": 0.98
                        },
                        {
                            "end": 48.52,
                            "start": 48.36,
                            "word": "人",
                            "score": 0.99
                        },
                        {
                            "end": 48.68,
                            "start": 48.52,
                            "word": "大",
                            "score": 0.99
                        },
                        {
                            "end": 48.86,
                            "start": 48.68,
                            "word": "常",
                            "score": 0.99
                        },
                        {
                            "end": 49.02,
                            "start": 48.86,
                            "word": "委",
                            "score": 1
                        },
                        {
                            "end": 49.22,
                            "start": 49.02,
                            "word": "會",
                            "score": 1
                        },
                        {
                            "end": 49.46,
                            "start": 49.22,
                            "word": "第",
                            "score": 0.92
                        },
                        {
                            "end": 49.7,
                            "start": 49.46,
                            "word": "四",
                            "score": 0.99
                        },
                        {
                            "end": 49.9,
                            "start": 49.7,
                            "word": "次",
                            "score": 1
                        },
                        {
                            "end": 50.08,
                            "start": 49.9,
                            "word": "會",
                            "score": 1
                        },
                        {
                            "end": 50.2,
                            "start": 50.08,
                            "word": "議",
                            "score": 1
                        },
                        {
                            "end": 50.28,
                            "start": 50.2,
                            "word": "的",
                            "score": 0.91
                        },
                        {
                            "end": 50.38,
                            "start": 50.28,
                            "word": "有",
                            "score": 0.99
                        },
                        {
                            "end": 50.54,
                            "start": 50.38,
                            "word": "關",
                            "score": 1
                        },
                        {
                            "end": 50.76,
                            "start": 50.54,
                            "word": "決",
                            "score": 0.99
                        },
                        {
                            "end": 51.36,
                            "start": 50.76,
                            "word": "定",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 55.56,
                    "id": "96e6f0550b5e4764967577e18d52b36f",
                    "start": 51.36,
                    "score": 0.9,
                    "text": "和中華人民共和國主席令表述得很清楚,你可以查閱",
                    "words": [
                        {
                            "end": 51.64,
                            "start": 51.36,
                            "word": "和",
                            "score": 0.95
                        },
                        {
                            "end": 51.9,
                            "start": 51.64,
                            "word": "中",
                            "score": 0.99
                        },
                        {
                            "end": 52.04,
                            "start": 51.9,
                            "word": "華",
                            "score": 1
                        },
                        {
                            "end": 52.24,
                            "start": 52.04,
                            "word": "人民",
                            "score": 1
                        },
                        {
                            "end": 52.5,
                            "start": 52.24,
                            "word": "共",
                            "score": 1
                        },
                        {
                            "end": 52.66,
                            "start": 52.5,
                            "word": "和",
                            "score": 1
                        },
                        {
                            "end": 52.82,
                            "start": 52.66,
                            "word": "國",
                            "score": 1
                        },
                        {
                            "end": 52.98,
                            "start": 52.82,
                            "word": "主",
                            "score": 1
                        },
                        {
                            "end": 53.18,
                            "start": 52.98,
                            "word": "席",
                            "score": 1
                        },
                        {
                            "end": 53.38,
                            "start": 53.18,
                            "word": "令",
                            "score": 0.88
                        },
                        {
                            "end": 53.86,
                            "start": 53.38,
                            "word": "表",
                            "score": 0.94
                        },
                        {
                            "end": 54.04,
                            "start": 53.86,
                            "word": "述",
                            "score": 1
                        },
                        {
                            "end": 54.16,
                            "start": 54.04,
                            "word": "得",
                            "score": 0.87
                        },
                        {
                            "end": 54.34,
                            "start": 54.16,
                            "word": "很",
                            "score": 0.99
                        },
                        {
                            "end": 54.72,
                            "start": 54.34,
                            "word": "清楚,",
                            "score": 1
                        },
                        {
                            "end": 55.08,
                            "start": 54.9,
                            "word": "你可以",
                            "score": 0.79
                        },
                        {
                            "end": 55.4,
                            "start": 55.08,
                            "word": "查",
                            "score": 0.7
                        },
                        {
                            "end": 55.56,
                            "start": 55.4,
                            "word": "閱",
                            "score": 0.97
                        }
                    ]
                },
                {
                    "end": 58.14,
                    "id": "95553ff380344295a2703715ea284b66",
                    "start": 56.82,
                    "score": 0.73,
                    "text": "謝謝,裏面叫李登山",
                    "words": [
                        {
                            "end": 57.18,
                            "start": 56.82,
                            "word": "謝謝,",
                            "score": 0.13
                        },
                        {
                            "end": 57.38,
                            "start": 57.32,
                            "word": "裏",
                            "score": 0.55
                        },
                        {
                            "end": 57.52,
                            "start": 57.38,
                            "word": "面",
                            "score": 0.64
                        },
                        {
                            "end": 57.68,
                            "start": 57.52,
                            "word": "叫",
                            "score": 0.1
                        },
                        {
                            "end": 57.84,
                            "start": 57.68,
                            "word": "李",
                            "score": 0.56
                        },
                        {
                            "end": 57.96,
                            "start": 57.84,
                            "word": "登",
                            "score": 0.51
                        },
                        {
                            "end": 58.14,
                            "start": 57.96,
                            "word": "山",
                            "score": 0.4
                        }
                    ]
                },
                {
                    "end": 63.4,
                    "id": "f3ee7ddc21ee4f4f896af98a16bd8b99",
                    "start": 58.86,
                    "score": 0.73,
                    "text": "昨天,全國人大常委會決定免去 Qin Gang 外政的人物",
                    "words": [
                        {
                            "end": 59.22,
                            "start": 58.86,
                            "word": "昨",
                            "score": 0.74
                        },
                        {
                            "end": 59.48,
                            "start": 59.22,
                            "word": "天,",
                            "score": 0.99
                        },
                        {
                            "end": 59.74,
                            "start": 59.64,
                            "word": "全",
                            "score": 0.27
                        },
                        {
                            "end": 59.9,
                            "start": 59.74,
                            "word": "國",
                            "score": 0.99
                        },
                        {
                            "end": 60.08,
                            "start": 59.9,
                            "word": "人",
                            "score": 0.95
                        },
                        {
                            "end": 60.28,
                            "start": 60.08,
                            "word": "大",
                            "score": 0.01
                        },
                        {
                            "end": 60.5,
                            "start": 60.28,
                            "word": "常",
                            "score": 0.78
                        },
                        {
                            "end": 60.66,
                            "start": 60.5,
                            "word": "委",
                            "score": 1
                        },
                        {
                            "end": 60.92,
                            "start": 60.66,
                            "word": "會",
                            "score": 0.99
                        },
                        {
                            "end": 61.32,
                            "start": 60.92,
                            "word": "決",
                            "score": 0.47
                        },
                        {
                            "end": 61.64,
                            "start": 61.32,
                            "word": "定",
                            "score": 0.99
                        },
                        {
                            "end": 61.88,
                            "start": 61.64,
                            "word": "免",
                            "score": 0.54
                        },
                        {
                            "end": 62.14,
                            "start": 61.88,
                            "word": "去",
                            "score": 0.41
                        },
                        {
                            "end": 62.36,
                            "start": 62.14,
                            "word": " Qin",
                            "score": 0
                        },
                        {
                            "end": 62.5,
                            "start": 62.36,
                            "word": " Gang",
                            "score": 0.35
                        },
                        {
                            "end": 62.68,
                            "start": 62.58,
                            "word": " 外",
                            "score": 0.98
                        },
                        {
                            "end": 62.82,
                            "start": 62.68,
                            "word": "政",
                            "score": 0.21
                        },
                        {
                            "end": 63.06,
                            "start": 62.82,
                            "word": "的人",
                            "score": 0.62
                        },
                        {
                            "end": 63.4,
                            "start": 63.06,
                            "word": "物",
                            "score": 0.63
                        }
                    ]
                },
                {
                    "end": 66.76,
                    "id": "db2002bf1c794d108b0614f39702e1a8",
                    "start": 63.8,
                    "score": 0.73,
                    "text": "他免去外政的理由是能夠健康為敵嗎?",
                    "words": [
                        {
                            "end": 64.16,
                            "start": 63.8,
                            "word": "他",
                            "score": 0.48
                        },
                        {
                            "end": 64.32,
                            "start": 64.16,
                            "word": "免",
                            "score": 0.94
                        },
                        {
                            "end": 64.48,
                            "start": 64.32,
                            "word": "去",
                            "score": 0.95
                        },
                        {
                            "end": 64.72,
                            "start": 64.48,
                            "word": "外",
                            "score": 0.99
                        },
                        {
                            "end": 64.88,
                            "start": 64.72,
                            "word": "政",
                            "score": 0.99
                        },
                        {
                            "end": 65.06,
                            "start": 64.88,
                            "word": "的",
                            "score": 0.91
                        },
                        {
                            "end": 65.22,
                            "start": 65.06,
                            "word": "理",
                            "score": 0.98
                        },
                        {
                            "end": 65.36,
                            "start": 65.22,
                            "word": "由",
                            "score": 1
                        },
                        {
                            "end": 65.56,
                            "start": 65.36,
                            "word": "是",
                            "score": 0.92
                        },
                        {
                            "end": 65.7,
                            "start": 65.56,
                            "word": "能",
                            "score": 0.64
                        },
                        {
                            "end": 65.84,
                            "start": 65.7,
                            "word": "夠",
                            "score": 0.69
                        },
                        {
                            "end": 66.02,
                            "start": 65.84,
                            "word": "健",
                            "score": 0.68
                        },
                        {
                            "end": 66.26,
                            "start": 66.02,
                            "word": "康",
                            "score": 1
                        },
                        {
                            "end": 66.46,
                            "start": 66.26,
                            "word": "為",
                            "score": 0.49
                        },
                        {
                            "end": 66.62,
                            "start": 66.46,
                            "word": "敵",
                            "score": 0.59
                        },
                        {
                            "end": 66.76,
                            "start": 66.62,
                            "word": "嗎?",
                            "score": 0.32
                        }
                    ]
                },
                {
                    "end": 69.12,
                    "id": "bdd1d25365fa430dbed99265fefd5806",
                    "start": 66.88,
                    "score": 0.73,
                    "text": "能夠請教主席的理由",
                    "words": [
                        {
                            "end": 66.88,
                            "start": 66.88,
                            "word": "能",
                            "score": 0.03
                        },
                        {
                            "end": 67.26,
                            "start": 66.88,
                            "word": "夠",
                            "score": 0.97
                        },
                        {
                            "end": 67.4,
                            "start": 67.26,
                            "word": "請",
                            "score": 0.08
                        },
                        {
                            "end": 67.56,
                            "start": 67.4,
                            "word": "教",
                            "score": 0.84
                        },
                        {
                            "end": 67.98,
                            "start": 67.56,
                            "word": "主",
                            "score": 0.06
                        },
                        {
                            "end": 68.2,
                            "start": 67.98,
                            "word": "席",
                            "score": 0.9
                        },
                        {
                            "end": 68.38,
                            "start": 68.2,
                            "word": "的",
                            "score": 0.74
                        },
                        {
                            "end": 68.84,
                            "start": 68.38,
                            "word": "理",
                            "score": 0.99
                        },
                        {
                            "end": 69.12,
                            "start": 68.84,
                            "word": "由",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 72.34,
                    "id": "cc5a59b270914fe482398fbb7db54578",
                    "start": 70.54,
                    "score": 0.73,
                    "text": "我沒有可以提供的信息",
                    "words": [
                        {
                            "end": 70.9,
                            "start": 70.54,
                            "word": "我",
                            "score": 0.51
                        },
                        {
                            "end": 71.12,
                            "start": 70.9,
                            "word": "沒有",
                            "score": 0.96
                        },
                        {
                            "end": 71.44,
                            "start": 71.12,
                            "word": "可以",
                            "score": 0.77
                        },
                        {
                            "end": 71.62,
                            "start": 71.44,
                            "word": "提",
                            "score": 1
                        },
                        {
                            "end": 71.76,
                            "start": 71.62,
                            "word": "供",
                            "score": 1
                        },
                        {
                            "end": 71.9,
                            "start": 71.76,
                            "word": "的",
                            "score": 0.98
                        },
                        {
                            "end": 72.06,
                            "start": 71.9,
                            "word": "信",
                            "score": 0.6
                        },
                        {
                            "end": 72.34,
                            "start": 72.06,
                            "word": "息",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 74.56,
                    "id": "94dce93b38b14da28ce7b6ca2d1cdcea",
                    "start": 72.34,
                    "score": 0.73,
                    "text": "我還是建議你查閱新華社發佈的消息",
                    "words": [
                        {
                            "end": 72.62,
                            "start": 72.34,
                            "word": "我",
                            "score": 0.73
                        },
                        {
                            "end": 72.82,
                            "start": 72.62,
                            "word": "還是",
                            "score": 0.98
                        },
                        {
                            "end": 73,
                            "start": 72.82,
                            "word": "建",
                            "score": 0.99
                        },
                        {
                            "end": 73.12,
                            "start": 73,
                            "word": "議",
                            "score": 1
                        },
                        {
                            "end": 73.26,
                            "start": 73.12,
                            "word": "你",
                            "score": 0.35
                        },
                        {
                            "end": 73.36,
                            "start": 73.26,
                            "word": "查",
                            "score": 0.9
                        },
                        {
                            "end": 73.5,
                            "start": 73.36,
                            "word": "閱",
                            "score": 0.98
                        },
                        {
                            "end": 73.66,
                            "start": 73.5,
                            "word": "新",
                            "score": 0.88
                        },
                        {
                            "end": 73.76,
                            "start": 73.66,
                            "word": "華",
                            "score": 0.96
                        },
                        {
                            "end": 73.9,
                            "start": 73.76,
                            "word": "社",
                            "score": 0.99
                        },
                        {
                            "end": 74.08,
                            "start": 73.9,
                            "word": "發",
                            "score": 0.98
                        },
                        {
                            "end": 74.18,
                            "start": 74.08,
                            "word": "佈",
                            "score": 0.85
                        },
                        {
                            "end": 74.3,
                            "start": 74.18,
                            "word": "的",
                            "score": 0.99
                        },
                        {
                            "end": 74.46,
                            "start": 74.3,
                            "word": "消",
                            "score": 0.98
                        },
                        {
                            "end": 74.63999999999999,
                            "start": 74.46,
                            "word": "息",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 80.48,
                    "id": "68490da0ccd945ac954bee37f70aa867",
                    "start": 75.7,
                    "score": 0.73,
                    "text": "還是關於 Qin Gang 目前人在哪裡",
                    "words": [
                        {
                            "end": 76.06,
                            "start": 75.7,
                            "word": "還是",
                            "score": 0.84
                        },
                        {
                            "end": 76.28,
                            "start": 76.06,
                            "word": "關",
                            "score": 0.98
                        },
                        {
                            "end": 76.38,
                            "start": 76.28,
                            "word": "於",
                            "score": 0.99
                        },
                        {
                            "end": 76.64,
                            "start": 76.38,
                            "word": " Qin",
                            "score": 0.57
                        },
                        {
                            "end": 76.84,
                            "start": 76.64,
                            "word": " Gang",
                            "score": 0.87
                        },
                        {
                            "end": 79.32,
                            "start": 76.9,
                            "word": " 目前",
                            "score": 0.17
                        },
                        {
                            "end": 79.9,
                            "start": 79.32,
                            "word": "人",
                            "score": 0.78
                        },
                        {
                            "end": 80.16,
                            "start": 79.9,
                            "word": "在",
                            "score": 0.94
                        },
                        {
                            "end": 80.48,
                            "start": 80.16,
                            "word": "哪裡",
                            "score": 0.47
                        }
                    ]
                },
                {
                    "end": 83.6,
                    "id": "df0a6fdc049a4ce089f5f9f1f400a282",
                    "start": 81.72,
                    "score": 0.73,
                    "text": "你有這方面的消息嗎,謝謝",
                    "words": [
                        {
                            "end": 82.08,
                            "start": 81.72,
                            "word": "你有",
                            "score": 0.15
                        },
                        {
                            "end": 82.44,
                            "start": 82.08,
                            "word": "這",
                            "score": 0.87
                        },
                        {
                            "end": 82.64,
                            "start": 82.44,
                            "word": "方面",
                            "score": 1
                        },
                        {
                            "end": 82.82,
                            "start": 82.64,
                            "word": "的",
                            "score": 1
                        },
                        {
                            "end": 83,
                            "start": 82.82,
                            "word": "消",
                            "score": 0.98
                        },
                        {
                            "end": 83.2,
                            "start": 83,
                            "word": "息",
                            "score": 1
                        },
                        {
                            "end": 83.38,
                            "start": 83.2,
                            "word": "嗎,",
                            "score": 0.91
                        },
                        {
                            "end": 83.6,
                            "start": 83.46,
                            "word": "謝謝",
                            "score": 0.96
                        }
                    ]
                },
                {
                    "end": 85.76,
                    "id": "9c7dd2095d184013acbc185dc9ef7b81",
                    "start": 83.6,
                    "score": 0.85,
                    "text": "我沒有可以提供的信息",
                    "words": [
                        {
                            "end": 84.44,
                            "start": 83.6,
                            "word": "我",
                            "score": 0.3
                        },
                        {
                            "end": 84.62,
                            "start": 84.44,
                            "word": "沒有",
                            "score": 0.76
                        },
                        {
                            "end": 84.88,
                            "start": 84.62,
                            "word": "可以",
                            "score": 0.88
                        },
                        {
                            "end": 85.04,
                            "start": 84.88,
                            "word": "提",
                            "score": 1
                        },
                        {
                            "end": 85.16,
                            "start": 85.04,
                            "word": "供",
                            "score": 1
                        },
                        {
                            "end": 85.3,
                            "start": 85.16,
                            "word": "的",
                            "score": 0.97
                        },
                        {
                            "end": 85.48,
                            "start": 85.3,
                            "word": "信",
                            "score": 0.92
                        },
                        {
                            "end": 85.76,
                            "start": 85.48,
                            "word": "息",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 87.82,
                    "id": "986eee7bc09f40dfb8fc72c7bba62d07",
                    "start": 86.60000000000001,
                    "score": 0.85,
                    "text": "謝謝路透社",
                    "words": [
                        {
                            "end": 86.92,
                            "start": 86.6,
                            "word": "謝謝",
                            "score": 0.79
                        },
                        {
                            "end": 87.12,
                            "start": 86.92,
                            "word": "路",
                            "score": 0.41
                        },
                        {
                            "end": 87.3,
                            "start": 87.12,
                            "word": "透",
                            "score": 0.98
                        },
                        {
                            "end": 87.82,
                            "start": 87.3,
                            "word": "社",
                            "score": 0.97
                        }
                    ]
                },
                {
                    "end": 93.2,
                    "id": "5032c8c286f84420aff8a916d7bab0c0",
                    "start": 88.60000000000001,
                    "score": 0.85,
                    "text": "再問一下剛才你說新華社的相關報導",
                    "words": [
                        {
                            "end": 89.04,
                            "start": 88.60000000000001,
                            "word": "再",
                            "score": 0.38
                        },
                        {
                            "end": 89.5,
                            "start": 89.04,
                            "word": "問",
                            "score": 0.99
                        },
                        {
                            "end": 89.8,
                            "start": 89.5,
                            "word": "一下",
                            "score": 0.98
                        },
                        {
                            "end": 90.38,
                            "start": 89.8,
                            "word": "剛",
                            "score": 0.6
                        },
                        {
                            "end": 90.58,
                            "start": 90.38,
                            "word": "才",
                            "score": 0.98
                        },
                        {
                            "end": 91.02,
                            "start": 90.58,
                            "word": "你說",
                            "score": 0.77
                        },
                        {
                            "end": 91.72,
                            "start": 91.02,
                            "word": "新",
                            "score": 0.41
                        },
                        {
                            "end": 91.88,
                            "start": 91.72,
                            "word": "華",
                            "score": 1
                        },
                        {
                            "end": 92.12,
                            "start": 91.88,
                            "word": "社",
                            "score": 1
                        },
                        {
                            "end": 92.32,
                            "start": 92.12,
                            "word": "的",
                            "score": 0.92
                        },
                        {
                            "end": 92.68,
                            "start": 92.32,
                            "word": "相",
                            "score": 0.99
                        },
                        {
                            "end": 92.82,
                            "start": 92.68,
                            "word": "關",
                            "score": 1
                        },
                        {
                            "end": 93.2,
                            "start": 92.82,
                            "word": "報導",
                            "score": 0.9
                        }
                    ]
                },
                {
                    "end": 96.56,
                    "id": "087244d5de524177894c21777c07d5fa",
                    "start": 93.2,
                    "score": 0.85,
                    "text": "已經表達得非常清楚",
                    "words": [
                        {
                            "end": 94,
                            "start": 93.2,
                            "word": "已經",
                            "score": 0.95
                        },
                        {
                            "end": 95.64,
                            "start": 94,
                            "word": "表",
                            "score": 0.96
                        },
                        {
                            "end": 95.78,
                            "start": 95.64,
                            "word": "達",
                            "score": 1
                        },
                        {
                            "end": 95.9,
                            "start": 95.78,
                            "word": "得",
                            "score": 0.67
                        },
                        {
                            "end": 96.08,
                            "start": 95.9,
                            "word": "非常",
                            "score": 0.99
                        },
                        {
                            "end": 96.56,
                            "start": 96.08,
                            "word": "清楚",
                            "score": 0.85
                        }
                    ]
                },
                {
                    "end": 97.62,
                    "id": "9ebb63e63a7f43e2bdbdfb813cd40d12",
                    "start": 96.56,
                    "score": 0.85,
                    "text": "現在的情況",
                    "words": [
                        {
                            "end": 97.16,
                            "start": 96.56,
                            "word": "現在",
                            "score": 0.74
                        },
                        {
                            "end": 97.36,
                            "start": 97.16,
                            "word": "的",
                            "score": 0.85
                        },
                        {
                            "end": 97.62,
                            "start": 97.36,
                            "word": "情況",
                            "score": 0.99
                        }
                    ]
                },
                {
                    "end": 102.68,
                    "id": "be74373b7998486481f67795c0938d8d",
                    "start": 98.58,
                    "score": 0.85,
                    "text": "我理解你說你認為非常清楚",
                    "words": [
                        {
                            "end": 99.22,
                            "start": 98.58,
                            "word": "我",
                            "score": 0.72
                        },
                        {
                            "end": 99.44,
                            "start": 99.22,
                            "word": "理",
                            "score": 0.99
                        },
                        {
                            "end": 99.72,
                            "start": 99.44,
                            "word": "解",
                            "score": 1
                        },
                        {
                            "end": 101,
                            "start": 99.72,
                            "word": "你說",
                            "score": 0.91
                        },
                        {
                            "end": 101.44,
                            "start": 101,
                            "word": "你",
                            "score": 0.9
                        },
                        {
                            "end": 101.8,
                            "start": 101.44,
                            "word": "認為",
                            "score": 1
                        },
                        {
                            "end": 102.18,
                            "start": 101.8,
                            "word": "非常",
                            "score": 0.99
                        },
                        {
                            "end": 102.68,
                            "start": 102.18,
                            "word": "清楚",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 105.4,
                    "id": "ca94a685448a4c09a2454fb7174f4996",
                    "start": 102.68,
                    "score": 0.85,
                    "text": "對我們來說還是不太清楚",
                    "words": [
                        {
                            "end": 103.7,
                            "start": 102.68,
                            "word": "對",
                            "score": 0.5
                        },
                        {
                            "end": 103.94,
                            "start": 103.7,
                            "word": "我們",
                            "score": 0.67
                        },
                        {
                            "end": 104.34,
                            "start": 103.94,
                            "word": "來說",
                            "score": 1
                        },
                        {
                            "end": 104.66,
                            "start": 104.34,
                            "word": "還是",
                            "score": 0.97
                        },
                        {
                            "end": 104.9,
                            "start": 104.66,
                            "word": "不",
                            "score": 1
                        },
                        {
                            "end": 105.02,
                            "start": 104.9,
                            "word": "太",
                            "score": 1
                        },
                        {
                            "end": 105.4,
                            "start": 105.02,
                            "word": "清楚",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 107.22,
                    "id": "1d2a80ee9ea14a5e9a026403ef4e0c84",
                    "start": 105.4,
                    "score": 0.85,
                    "text": "所以想再問一下",
                    "words": [
                        {
                            "end": 106,
                            "start": 105.4,
                            "word": "所以",
                            "score": 0.84
                        },
                        {
                            "end": 106.26,
                            "start": 106,
                            "word": "想",
                            "score": 0.95
                        },
                        {
                            "end": 106.6,
                            "start": 106.26,
                            "word": "再",
                            "score": 0.98
                        },
                        {
                            "end": 106.78,
                            "start": 106.6,
                            "word": "問",
                            "score": 1
                        },
                        {
                            "end": 107.22,
                            "start": 106.78,
                            "word": "一下",
                            "score": 0.99
                        }
                    ]
                },
                {
                    "end": 111.56,
                    "id": "6ae040bfa2494ab6ada855bf82e2d162",
                    "start": 108.78,
                    "score": 0.85,
                    "text": "他不是外長這個事情",
                    "words": [
                        {
                            "end": 109.42,
                            "start": 108.78,
                            "word": "他",
                            "score": 0.5
                        },
                        {
                            "end": 110.06,
                            "start": 109.42,
                            "word": "不是",
                            "score": 0.94
                        },
                        {
                            "end": 110.38,
                            "start": 110.06,
                            "word": "外",
                            "score": 0.99
                        },
                        {
                            "end": 110.6,
                            "start": 110.38,
                            "word": "長",
                            "score": 0.98
                        },
                        {
                            "end": 110.92,
                            "start": 110.6,
                            "word": "這個",
                            "score": 0.91
                        },
                        {
                            "end": 111.56,
                            "start": 110.92,
                            "word": "事情",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 114.52,
                    "id": "61e5c82a7151474cb6bc0669c1dde530",
                    "start": 112.53999999999999,
                    "score": 0.86,
                    "text": "為什麼你覺得清楚",
                    "words": [
                        {
                            "end": 113.06,
                            "start": 112.53999999999999,
                            "word": "為什麼",
                            "score": 0.07
                        },
                        {
                            "end": 113.52,
                            "start": 113.06,
                            "word": "你",
                            "score": 0.92
                        },
                        {
                            "end": 114.06,
                            "start": 113.52,
                            "word": "覺得",
                            "score": 0.93
                        },
                        {
                            "end": 114.52,
                            "start": 114.06,
                            "word": "清楚",
                            "score": 0.97
                        }
                    ]
                },
                {
                    "end": 116.3,
                    "id": "82d849efbd9144429602ca241f80cc3e",
                    "start": 114.52,
                    "score": 0.86,
                    "text": "他清楚在哪裡",
                    "words": [
                        {
                            "end": 115.2,
                            "start": 114.52,
                            "word": "他",
                            "score": 0.36
                        },
                        {
                            "end": 115.62,
                            "start": 115.2,
                            "word": "清楚",
                            "score": 0.97
                        },
                        {
                            "end": 115.96,
                            "start": 115.62,
                            "word": "在",
                            "score": 0.99
                        },
                        {
                            "end": 116.3,
                            "start": 115.96,
                            "word": "哪裡",
                            "score": 0.92
                        }
                    ]
                },
                {
                    "end": 116.84,
                    "id": "56369f2871084397b7f5ef81646e78b8",
                    "start": 116.3,
                    "score": 0.86,
                    "text": "謝謝",
                    "words": [
                        {
                            "end": 116.84,
                            "start": 116.3,
                            "word": "謝謝",
                            "score": 0.65
                        }
                    ]
                },
                {
                    "end": 120.68,
                    "id": "1c5caf68b4ce46dd9c851e1f5f246021",
                    "start": 118.74000000000001,
                    "score": 0.86,
                    "text": "我已經回答過這個問題",
                    "words": [
                        {
                            "end": 119.26,
                            "start": 118.74000000000001,
                            "word": "我",
                            "score": 0.93
                        },
                        {
                            "end": 119.46,
                            "start": 119.26,
                            "word": "已經",
                            "score": 0.99
                        },
                        {
                            "end": 119.66,
                            "start": 119.46,
                            "word": "回",
                            "score": 1
                        },
                        {
                            "end": 119.82,
                            "start": 119.66,
                            "word": "答",
                            "score": 1
                        },
                        {
                            "end": 119.98,
                            "start": 119.82,
                            "word": "過",
                            "score": 0.87
                        },
                        {
                            "end": 120.2,
                            "start": 119.98,
                            "word": "這個",
                            "score": 0.98
                        },
                        {
                            "end": 120.68,
                            "start": 120.2,
                            "word": "問題",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 123.52,
                    "id": "768d8aaf4ca14990b43446e39ccd31ff",
                    "start": 120.68,
                    "score": 0.86,
                    "text": "新華社已經發佈了消息",
                    "words": [
                        {
                            "end": 121.54,
                            "start": 120.68,
                            "word": "新",
                            "score": 0.94
                        },
                        {
                            "end": 121.74,
                            "start": 121.54,
                            "word": "華",
                            "score": 1
                        },
                        {
                            "end": 121.98,
                            "start": 121.74,
                            "word": "社",
                            "score": 1
                        },
                        {
                            "end": 122.3,
                            "start": 121.98,
                            "word": "已經",
                            "score": 0.98
                        },
                        {
                            "end": 122.64,
                            "start": 122.3,
                            "word": "發",
                            "score": 0.98
                        },
                        {
                            "end": 122.84,
                            "start": 122.64,
                            "word": "佈",
                            "score": 0.85
                        },
                        {
                            "end": 123,
                            "start": 122.84,
                            "word": "了",
                            "score": 0.93
                        },
                        {
                            "end": 123.2,
                            "start": 123,
                            "word": "消",
                            "score": 1
                        },
                        {
                            "end": 123.52,
                            "start": 123.2,
                            "word": "息",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 126.24,
                    "id": "b5eef3dba5574750b10718d560defe11",
                    "start": 123.52,
                    "score": 0.86,
                    "text": "除此之外我沒有更多的信息",
                    "words": [
                        {
                            "end": 123.82,
                            "start": 123.52,
                            "word": "除",
                            "score": 0.99
                        },
                        {
                            "end": 124.08,
                            "start": 123.82,
                            "word": "此",
                            "score": 1
                        },
                        {
                            "end": 124.26,
                            "start": 124.08,
                            "word": "之",
                            "score": 1
                        },
                        {
                            "end": 124.42,
                            "start": 124.26,
                            "word": "外",
                            "score": 1
                        },
                        {
                            "end": 124.6,
                            "start": 124.42,
                            "word": "我",
                            "score": 0.85
                        },
                        {
                            "end": 124.78,
                            "start": 124.6,
                            "word": "沒有",
                            "score": 0.99
                        },
                        {
                            "end": 125.04,
                            "start": 124.78,
                            "word": "更",
                            "score": 1
                        },
                        {
                            "end": 125.24,
                            "start": 125.04,
                            "word": "多",
                            "score": 1
                        },
                        {
                            "end": 125.38,
                            "start": 125.24,
                            "word": "的",
                            "score": 0.99
                        },
                        {
                            "end": 125.56,
                            "start": 125.38,
                            "word": "信",
                            "score": 0.9
                        },
                        {
                            "end": 126.24,
                            "start": 125.56,
                            "word": "息",
                            "score": 0.98
                        }
                    ]
                },
                {
                    "end": 129.72,
                    "id": "0e306bba54084ce980865080160218ad",
                    "start": 128.72,
                    "score": 0.86,
                    "text": "下一個問題",
                    "words": [
                        {
                            "end": 129.24,
                            "start": 128.72,
                            "word": "下",
                            "score": 0.96
                        },
                        {
                            "end": 129.38,
                            "start": 129.24,
                            "word": "一個",
                            "score": 0.98
                        },
                        {
                            "end": 129.72,
                            "start": 129.38,
                            "word": "問題",
                            "score": 0.99
                        }
                    ]
                },
                {
                    "end": 135.46,
                    "id": "954f9a9e4aa04a0197efa07304c0b810",
                    "start": 133.7,
                    "score": 0.86,
                    "text": "那你作為發言人",
                    "words": [
                        {
                            "end": 134.22,
                            "start": 133.7,
                            "word": "那",
                            "score": 0.68
                        },
                        {
                            "end": 134.42,
                            "start": 134.22,
                            "word": "你",
                            "score": 0.95
                        },
                        {
                            "end": 134.8,
                            "start": 134.42,
                            "word": "作",
                            "score": 0.95
                        },
                        {
                            "end": 134.98,
                            "start": 134.8,
                            "word": "為",
                            "score": 1
                        },
                        {
                            "end": 135.16,
                            "start": 134.98,
                            "word": "發",
                            "score": 0.88
                        },
                        {
                            "end": 135.28,
                            "start": 135.16,
                            "word": "言",
                            "score": 0.92
                        },
                        {
                            "end": 135.46,
                            "start": 135.28,
                            "word": "人",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 139.38,
                    "id": "8a0f5f7a033340c1819c77fb3295d870",
                    "start": 135.46,
                    "score": 0.86,
                    "text": "你如何評價 Qin Gang 就",
                    "words": [
                        {
                            "end": 135.7,
                            "start": 135.46,
                            "word": "你",
                            "score": 0.89
                        },
                        {
                            "end": 137.38,
                            "start": 135.7,
                            "word": "如何",
                            "score": 0.52
                        },
                        {
                            "end": 137.76,
                            "start": 137.38,
                            "word": "評",
                            "score": 0.87
                        },
                        {
                            "end": 138.02,
                            "start": 137.76,
                            "word": "價",
                            "score": 1
                        },
                        {
                            "end": 138.34,
                            "start": 138.02,
                            "word": " Qin",
                            "score": 0
                        },
                        {
                            "end": 138.68,
                            "start": 138.34,
                            "word": " Gang",
                            "score": 0.81
                        },
                        {
                            "end": 139.38,
                            "start": 138.68,
                            "word": " 就",
                            "score": 0.15
                        }
                    ]
                },
                {
                    "end": 142.32,
                    "id": "dcfce26212aa430bb1e870f8d036cb8f",
                    "start": 139.38,
                    "score": 0.84,
                    "text": "帶人外交部部長這個七個月的工作",
                    "words": [
                        {
                            "end": 139.88,
                            "start": 139.38,
                            "word": "帶",
                            "score": 0.02
                        },
                        {
                            "end": 140.02,
                            "start": 139.88,
                            "word": "人",
                            "score": 0.76
                        },
                        {
                            "end": 140.22,
                            "start": 140.02,
                            "word": "外",
                            "score": 0.92
                        },
                        {
                            "end": 140.36,
                            "start": 140.22,
                            "word": "交",
                            "score": 0.99
                        },
                        {
                            "end": 140.52,
                            "start": 140.36,
                            "word": "部",
                            "score": 0.8
                        },
                        {
                            "end": 140.72,
                            "start": 140.52,
                            "word": "部",
                            "score": 0.37
                        },
                        {
                            "end": 140.86,
                            "start": 140.72,
                            "word": "長",
                            "score": 0.97
                        },
                        {
                            "end": 141.14,
                            "start": 140.86,
                            "word": "這個",
                            "score": 0.54
                        },
                        {
                            "end": 141.66,
                            "start": 141.14,
                            "word": "七",
                            "score": 0.66
                        },
                        {
                            "end": 141.78,
                            "start": 141.66,
                            "word": "個",
                            "score": 1
                        },
                        {
                            "end": 141.92,
                            "start": 141.78,
                            "word": "月",
                            "score": 1
                        },
                        {
                            "end": 142.06,
                            "start": 141.92,
                            "word": "的",
                            "score": 0.99
                        },
                        {
                            "end": 142.32,
                            "start": 142.06,
                            "word": "工作",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 142.7,
                    "id": "02ec6d7880634c0496eeae3b278b86c1",
                    "start": 142.32,
                    "score": 0.84,
                    "text": "謝謝",
                    "words": [
                        {
                            "end": 142.7,
                            "start": 142.32,
                            "word": "謝謝",
                            "score": 0.45
                        }
                    ]
                },
                {
                    "end": 146.46,
                    "id": "766616e2b05f4fd68c662cf1588157e7",
                    "start": 143.54,
                    "score": 0.84,
                    "text": "我可能不是回答這個問題的合適人權",
                    "words": [
                        {
                            "end": 143.98,
                            "start": 143.54,
                            "word": "我",
                            "score": 0.94
                        },
                        {
                            "end": 144.32,
                            "start": 143.98,
                            "word": "可能",
                            "score": 0.99
                        },
                        {
                            "end": 144.78,
                            "start": 144.32,
                            "word": "不是",
                            "score": 0.97
                        },
                        {
                            "end": 145,
                            "start": 144.78,
                            "word": "回",
                            "score": 1
                        },
                        {
                            "end": 145.12,
                            "start": 145,
                            "word": "答",
                            "score": 1
                        },
                        {
                            "end": 145.32,
                            "start": 145.12,
                            "word": "這個",
                            "score": 0.98
                        },
                        {
                            "end": 145.54,
                            "start": 145.32,
                            "word": "問題",
                            "score": 1
                        },
                        {
                            "end": 145.74,
                            "start": 145.54,
                            "word": "的",
                            "score": 0.96
                        },
                        {
                            "end": 145.88,
                            "start": 145.74,
                            "word": "合",
                            "score": 0.96
                        },
                        {
                            "end": 146.04,
                            "start": 145.88,
                            "word": "適",
                            "score": 0.98
                        },
                        {
                            "end": 146.24,
                            "start": 146.04,
                            "word": "人",
                            "score": 0.99
                        },
                        {
                            "end": 146.46,
                            "start": 146.24,
                            "word": "權",
                            "score": 0.8
                        }
                    ]
                },
                {
                    "end": 149.58,
                    "id": "b891b1c2120f4a03aba1d2c80c18eff3",
                    "start": 147.02,
                    "score": 0.84,
                    "text": "我覺得我不適合作出評價",
                    "words": [
                        {
                            "end": 147.46,
                            "start": 147.02,
                            "word": "我覺得",
                            "score": 0.49
                        },
                        {
                            "end": 147.86,
                            "start": 147.46,
                            "word": "我不",
                            "score": 0.63
                        },
                        {
                            "end": 148.02,
                            "start": 147.86,
                            "word": "適",
                            "score": 1
                        },
                        {
                            "end": 148.14,
                            "start": 148.02,
                            "word": "合",
                            "score": 1
                        },
                        {
                            "end": 148.28,
                            "start": 148.14,
                            "word": "作",
                            "score": 0.21
                        },
                        {
                            "end": 148.4,
                            "start": 148.28,
                            "word": "出",
                            "score": 0.94
                        },
                        {
                            "end": 148.62,
                            "start": 148.4,
                            "word": "評",
                            "score": 0.98
                        },
                        {
                            "end": 149.58,
                            "start": 148.62,
                            "word": "價",
                            "score": 0.99
                        }
                    ]
                },
                {
                    "end": 151.84,
                    "id": "0be7a91a70ad42c7a9a21c420fc9bb92",
                    "start": 150.82,
                    "score": 0.84,
                    "text": "謝謝路透社",
                    "words": [
                        {
                            "end": 151.26,
                            "start": 150.82,
                            "word": "謝謝",
                            "score": 0.7
                        },
                        {
                            "end": 151.48,
                            "start": 151.26,
                            "word": "路",
                            "score": 0.16
                        },
                        {
                            "end": 151.62,
                            "start": 151.48,
                            "word": "透",
                            "score": 0.65
                        },
                        {
                            "end": 151.84,
                            "start": 151.62,
                            "word": "社",
                            "score": 0.86
                        }
                    ]
                },
                {
                    "end": 154.94,
                    "id": "bd8d4968720e45778fe1c3bac3cf9933",
                    "start": 152.38,
                    "score": 0.84,
                    "text": "想問一下中國政府",
                    "words": [
                        {
                            "end": 152.46,
                            "start": 152.24,
                            "word": "想",
                            "score": 0.94
                        },
                        {
                            "end": 152.62,
                            "start": 152.46,
                            "word": "問",
                            "score": 1
                        },
                        {
                            "end": 153,
                            "start": 152.62,
                            "word": "一下",
                            "score": 1
                        },
                        {
                            "end": 153.98,
                            "start": 153,
                            "word": "中國",
                            "score": 0.66
                        },
                        {
                            "end": 154.94,
                            "start": 153.98,
                            "word": "政府",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 158.2,
                    "id": "5b84c2c2b33f46679daff1136cc236a7",
                    "start": 154.94,
                    "score": 0.84,
                    "text": "希望外界通過 Qin Gang",
                    "words": [
                        {
                            "end": 155.54,
                            "start": 154.94,
                            "word": "希望",
                            "score": 0.98
                        },
                        {
                            "end": 156.66,
                            "start": 155.54,
                            "word": "外",
                            "score": 0.63
                        },
                        {
                            "end": 156.92,
                            "start": 156.66,
                            "word": "界",
                            "score": 1
                        },
                        {
                            "end": 157.5,
                            "start": 156.92,
                            "word": "通",
                            "score": 0.91
                        },
                        {
                            "end": 157.72,
                            "start": 157.5,
                            "word": "過",
                            "score": 1
                        },
                        {
                            "end": 157.96,
                            "start": 157.72,
                            "word": " Qin",
                            "score": 0
                        },
                        {
                            "end": 158.2,
                            "start": 157.96,
                            "word": " Gang",
                            "score": 0.64
                        }
                    ]
                },
                {
                    "end": 161.92,
                    "id": "186a9d9a017846bda2184a8bd5266b7b",
                    "start": 158.2,
                    "score": 0.84,
                    "text": "最近這個事情瞭解什麼",
                    "words": [
                        {
                            "end": 159.02,
                            "start": 158.2,
                            "word": "最近",
                            "score": 0.46
                        },
                        {
                            "end": 159.36,
                            "start": 159.02,
                            "word": "這個",
                            "score": 0.96
                        },
                        {
                            "end": 159.74,
                            "start": 159.36,
                            "word": "事情",
                            "score": 0.99
                        },
                        {
                            "end": 161.42,
                            "start": 159.74,
                            "word": "瞭",
                            "score": 0.6
                        },
                        {
                            "end": 161.62,
                            "start": 161.42,
                            "word": "解",
                            "score": 1
                        },
                        {
                            "end": 161.92,
                            "start": 161.62,
                            "word": "什麼",
                            "score": 0.78
                        }
                    ]
                },
                {
                    "end": 162.78,
                    "id": "7fd1ae5daade4445af74982952e365e6",
                    "start": 161.92,
                    "score": 0.84,
                    "text": "學到什麼",
                    "words": [
                        {
                            "end": 162.38,
                            "start": 161.92,
                            "word": "學",
                            "score": 0.62
                        },
                        {
                            "end": 162.54,
                            "start": 162.38,
                            "word": "到",
                            "score": 0.98
                        },
                        {
                            "end": 162.78,
                            "start": 162.54,
                            "word": "什麼",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 171.76,
                    "id": "d8485db9d389436e8e16d761f75dfa3a",
                    "start": 170.39999999999998,
                    "score": 0.89,
                    "text": "這個取決於大家",
                    "words": [
                        {
                            "end": 170.79999999999998,
                            "start": 170.39999999999998,
                            "word": "這個",
                            "score": 0.46
                        },
                        {
                            "end": 171.2,
                            "start": 170.79999999999998,
                            "word": "取",
                            "score": 0.86
                        },
                        {
                            "end": 171.36,
                            "start": 171.2,
                            "word": "決",
                            "score": 0.99
                        },
                        {
                            "end": 171.48,
                            "start": 171.36,
                            "word": "於",
                            "score": 0.99
                        },
                        {
                            "end": 171.76,
                            "start": 171.48,
                            "word": "大家",
                            "score": 0.87
                        }
                    ]
                },
                {
                    "end": 175.06,
                    "id": "872ec05d8d224283a96475c0853f998c",
                    "start": 173.04,
                    "score": 0.89,
                    "text": "這是中國政府可以決定的嗎",
                    "words": [
                        {
                            "end": 173.44,
                            "start": 173.04,
                            "word": "這是",
                            "score": 0.57
                        },
                        {
                            "end": 173.84,
                            "start": 173.44,
                            "word": "中國",
                            "score": 0.33
                        },
                        {
                            "end": 174.14,
                            "start": 173.84,
                            "word": "政府",
                            "score": 1
                        },
                        {
                            "end": 174.36,
                            "start": 174.14,
                            "word": "可以",
                            "score": 0.98
                        },
                        {
                            "end": 174.56,
                            "start": 174.36,
                            "word": "決",
                            "score": 1
                        },
                        {
                            "end": 174.78,
                            "start": 174.56,
                            "word": "定",
                            "score": 1
                        },
                        {
                            "end": 174.88,
                            "start": 174.78,
                            "word": "的",
                            "score": 0.98
                        },
                        {
                            "end": 175.06,
                            "start": 174.88,
                            "word": "嗎",
                            "score": 0.61
                        }
                    ]
                },
                {
                    "end": 178.38,
                    "id": "d8fa3428d94f4387a792ea7e99033cba",
                    "start": 175.64,
                    "score": 0.89,
                    "text": "我們只是正常的發佈了信息",
                    "words": [
                        {
                            "end": 176.04,
                            "start": 175.64,
                            "word": "我們",
                            "score": 0.81
                        },
                        {
                            "end": 176.3,
                            "start": 176.04,
                            "word": "只是",
                            "score": 0.99
                        },
                        {
                            "end": 176.54,
                            "start": 176.3,
                            "word": "正",
                            "score": 1
                        },
                        {
                            "end": 176.74,
                            "start": 176.54,
                            "word": "常",
                            "score": 1
                        },
                        {
                            "end": 176.86,
                            "start": 176.74,
                            "word": "的",
                            "score": 0.51
                        },
                        {
                            "end": 177.02,
                            "start": 176.86,
                            "word": "發",
                            "score": 0.99
                        },
                        {
                            "end": 177.16,
                            "start": 177.02,
                            "word": "佈",
                            "score": 0.84
                        },
                        {
                            "end": 177.3,
                            "start": 177.16,
                            "word": "了",
                            "score": 0.93
                        },
                        {
                            "end": 177.46,
                            "start": 177.3,
                            "word": "信",
                            "score": 0.94
                        },
                        {
                            "end": 178.38,
                            "start": 177.46,
                            "word": "息",
                            "score": 1
                        }
                    ]
                },
                {
                    "end": 183.3,
                    "id": "171b071b299941c888499123d35722c9",
                    "start": 182.22,
                    "score": 0.89,
                    "text": "我能問問你嗎",
                    "words": [
                        {
                            "end": 182.62,
                            "start": 182.22,
                            "word": "我",
                            "score": 0.97
                        },
                        {
                            "end": 182.74,
                            "start": 182.62,
                            "word": "能",
                            "score": 1
                        },
                        {
                            "end": 182.88,
                            "start": 182.74,
                            "word": "問",
                            "score": 1
                        },
                        {
                            "end": 183.06,
                            "start": 182.88,
                            "word": "問",
                            "score": 1
                        },
                        {
                            "end": 183.18,
                            "start": 183.06,
                            "word": "你",
                            "score": 0.96
                        },
                        {
                            "end": 183.3,
                            "start": 183.18,
                            "word": "嗎",
                            "score": 0.85
                        }
                    ]
                },
                {
                    "end": 184.16,
                    "id": "5059b636042049e9a74dcb0841f55d4e",
                    "start": 183.3,
                    "score": 0.89,
                    "text": "你瞭解到什麼",
                    "words": [
                        {
                            "end": 183.44,
                            "start": 183.3,
                            "word": "你",
                            "score": 0.74
                        },
                        {
                            "end": 183.6,
                            "start": 183.44,
                            "word": "瞭",
                            "score": 0.72
                        },
                        {
                            "end": 183.74,
                            "start": 183.6,
                            "word": "解",
                            "score": 1
                        },
                        {
                            "end": 183.92,
                            "start": 183.74,
                            "word": "到",
                            "score": 0.9
                        },
                        {
                            "end": 184.16,
                            "start": 183.92,
                            "word": "什麼",
                            "score": 0.87
                        }
                    ]
                },
                {
                    "end": 184.94,
                    "id": "7c37e4d0b22b4fc19f838cf8d0e74652",
                    "start": 184.16,
                    "score": 0.89,
                    "text": "學到了什麼",
                    "words": [
                        {
                            "end": 184.38,
                            "start": 184.16,
                            "word": "學",
                            "score": 0.85
                        },
                        {
                            "end": 184.6,
                            "start": 184.38,
                            "word": "到了",
                            "score": 0.97
                        },
                        {
                            "end": 184.94,
                            "start": 184.6,
                            "word": "什麼",
                            "score": 0.99
                        }
                    ]
                }
            ],
            "text": "Hi, a question from Reuters. Why was Qin Gang removed from his post of foreign minister? 這個問題新華社已經發佈了消息,你可以查閱 下一個問題 下午好,法新社提問 白郊物榜站為什麼要刪除了所和 Qin Gang 有關的信息,謝謝 外交部網站的信息按照相關管理規定進行更新 十四屆全國人大常委會第四次會議的有關決定 和中華人民共和國主席令表述得很清楚,你可以查閱 謝謝,裏面叫李登山 昨天,全國人大常委會決定免去 Qin Gang 外政的人物 他免去外政的理由是能夠健康為敵嗎? 能夠請教主席的理由 我沒有可以提供的信息 我還是建議你查閱新華社發佈的消息 還是關於 Qin Gang 目前人在哪裡 你有這方面的消息嗎,謝謝 我沒有可以提供的信息 謝謝路透社 再問一下剛才你說新華社的相關報導 已經表達得非常清楚 現在的情況 我理解你說你認為非常清楚 對我們來說還是不太清楚 所以想再問一下 他不是外長這個事情 為什麼你覺得清楚 他清楚在哪裡 謝謝 我已經回答過這個問題 新華社已經發佈了消息 除此之外我沒有更多的信息 下一個問題 那你作為發言人 你如何評價 Qin Gang 就 帶人外交部部長這個七個月的工作 謝謝 我可能不是回答這個問題的合適人權 我覺得我不適合作出評價 謝謝路透社 想問一下中國政府 希望外界通過 Qin Gang 最近這個事情瞭解什麼 學到什麼 這個取決於大家 這是中國政府可以決定的嗎 我們只是正常的發佈了信息 我能問問你嗎 你瞭解到什麼 學到了什麼"
        },
        "translations": []
    }
]);

// contains the current editing transcription
export const currentTranscription = writable();

// transcription to be downloaded
export const downloadTranscription = writable(null);

// Editor history

export const editorHistory = writable([]);

// Upload progress and status
export const uploadProgress = writable(0);

// Upload progress and status
export const uid = writable(null);

// store token
const createBrowserUidStore = () => {
    const store = writable(localStorage.getItem('uid'))

    // Store the token in LocalStorage whenever it´s updated
    store.subscribe((val) => {
        if (!localStorage) return
        if (!val) return localStorage.removeItem('uid')
        localStorage.setItem('uid', val)
    })

    return store
}
// just enough to not crash in Node
const createNodeUidStore = () => writable(null)

export const storeUid = typeof localStorage === 'undefined'
? createNodeUidStore()
: createBrowserUidStore()


// store token
const createBrowserTokenStore = () => {
    const store = writable(localStorage.getItem('token'))

    // Store the token in LocalStorage whenever it´s updated
    store.subscribe((val) => {
        if (!localStorage) return
        if (!val) return localStorage.removeItem('token')
        localStorage.setItem('token', val)
    })

    return store
}
// just enough to not crash in Node
const createNodeTokenStore = () => writable(null)

export const storeToken = typeof localStorage === 'undefined'
? createNodeTokenStore()
: createBrowserTokenStore()

// editor settings
export let editorSettings = writable({
    autosave: false,
    autosaveInterval: 30000,
    autosaveNotify: true,
    seekOnClick: true,
});

// Video player settings
export const currentVideoPlayerTime = writable(0);