# JSEditor
JavaScript Editor for web/android/iOS

# 打包命令
jarsigner -verbose -keystore ./key.keystore -storepass king520520 -signedjar JSEditor.apk ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk tony -tsa http://sha256timestamp.ws.symantec.com/sha256/timestamp;