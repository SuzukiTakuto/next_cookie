import admin from "firebase-admin";

//ServiceAccountは、projectId, clientEmail, privateKey で構成されている
const serviceAccount: admin.ServiceAccount = {
    "projectId": "next-cookie-89902",
    "privateKey": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDA4FMTZvmIghXz\njoCZ+IciF5Oe4vr2GtvBP9FqYfB4rEWT2C1Y3FB+TtxsLYvo9y328f43DY3blKxm\n2hpefUtwFevyhIEYG3kTtVX2z8x6Mhsc5gri1m3HNunUYPvlqTaBuB5rJ16qslrY\nzEM3uLskbrdQrhf1cY4I+MCpz4kBHCuO/WORcRbp19B4CM8EV3S2S8UdBZ6N46vt\nBpSsjO5k9cM93opHG1R/T3agqzXh0Hn8JSudY/MfHEsHZMNdgrbcA1Ykdas1z+85\nQuI1UnPUG4xl9PLFxaEu2FjfQFZEr3PWtdGrlvwj+yNdMV456fb0rb9TN553PNb3\npYBUsw3zAgMBAAECggEANMnw0uGfMEZyXZvGBN4pliIfzB/RkiQdu1GNLnGp0E1O\nKb3EA4shGMDawVzh6xwj32+yJT03cz7IxMmy5+OhDwdg8ZpkfsWeKM+7vHZ5P4SR\nOSKZHiaUGy8jZnY4202p1m0fHjLDTTLNfILDbu/HgJww3gsYEZxHxJrYmGFt3Phv\n1010uddN7SzN3a5dGmEVRU35Zhg/I3vlTarcSO+VsGJahEAKdeLFpemJfu25BJs+\nwvhCKPcpMfPQg31hpD7aNXcX0wqJoqwkSdIhi/OHmho1661lqQAPOeLlWOoGol27\neLKEUjHZSMzNF0PYiECwBdtE50ernll/iKbPT9ij0QKBgQDvT42WPJeBITCiq1tS\ntwM1AnIlozn5edWr0Xj2RyAalLK3oZZCaxidUOG4LYO/HJRtxH3bHA9clpU1Dks/\n5tv/+5hFuU+CwwMXoncQAAWdBbqjiP2LYd8CVEnatsGufvd1GcI7tP9aVp8IuXPT\nQTeb+T80fCyIwyZQ5pGT2rwXCQKBgQDOU8U01DqKDzuYPAah9Krtwqzl777szMPC\ndUQINodSaH0BjeNWdf1iaL39lVGRT97m+mz3zOlJmsvBw0uJHt7MKosoesH1Kl8/\nJgLvXXYBpGghiiBNmEFUy9Nz3uNH1+y/UhiM6zcH96lKH0gAB8skaXAEC7a1iYp8\nncvrz3+gGwKBgQCS+l4wZph6g6L2VZ4qKCL9HLp0qVKDCbQU6fuL7tUl3iwBomnB\n8zrT7Agl8TZYWzpCTIsr1okMyaNsSZIn9icqiiDUueK+of01N+A+YHUSIqGlrQ5j\n28F3EcOmY9aC0JI1RpPHzfuDRW45koUzu3tm/Wc3WgiUGp9e0q2YjKA22QKBgQCx\n4F5/sQfWxlMmZ3mAXqKN3+uXQB1loRKTru0792aqkRJUKLL5czdDg/FnkTeFA0qz\n7unKqInmvuEy5t9UE50YfwUBnPNiHWmH04lsOzLlL4vmfmJjAwQvypk9p8ZhxbGB\nL5Giy5Xh9I2qLVWxUQa9GXlMw5x83VrbHF8VqQnqSQKBgQDVIbS+rMW8XPAbuuU0\n/QFWT+Bo8/7RQh1C7mbjsd8LTxYPpzg38nqky7AzHRrqv0nU5aVdK5hQ2niNwYRX\nJoppQI/YXLe5kpUBQI1tU8ZzM18bg2Yr51+uEqyLg3bTj1StKsyoXwFnXMZp/fT3\nMHKMSkPANmZGcl/81a4sFQNqvw==\n-----END PRIVATE KEY-----\n",
    "clientEmail": "firebase-adminsdk-na7id@next-cookie-89902.iam.gserviceaccount.com".replace(/\\n/g, "\n"),
};


export const firebaseAdmin = 
    admin.apps[0] || 
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });