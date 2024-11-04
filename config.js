const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_35_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk3LFxuICAgICAgICA2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgODMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDAsXG4gICAgICAgIDYyLFxuICAgICAgICAyOCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkzLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicUI1VXIzMFcxbVREVWJBWnp3bFZWMWN3eVQxTk51b0oxbllQc1BxOUtwYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDMxMTY1NDQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5QTlGQzExRDdGQ0MyMDYxQjY3RjIzMkNGMEFEMDcxQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjgxNjQxMjBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSGdTRVZyaGxSdUNzZ0o1eUVLcnBDQVwiLFxuICBcInBob25lSWRcIjogXCIwYjBkN2Y3Ny02Y2Q3LTQ1MjktYTY3ZC1iOTM2MDlmYzY1OWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgMTAsXG4gICAgICAxMzgsXG4gICAgICAyMzAsXG4gICAgICA5MSxcbiAgICAgIDE3MixcbiAgICAgIDE1NSxcbiAgICAgIDY4LFxuICAgICAgMjEzLFxuICAgICAgMjQ1LFxuICAgICAgMjI0LFxuICAgICAgMTI3LFxuICAgICAgMTk1LFxuICAgICAgMTU0LFxuICAgICAgMjI0LFxuICAgICAgMTc2LFxuICAgICAgMzUsXG4gICAgICAxMzUsXG4gICAgICAxODQsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgMTg5LFxuICAgICAgMTc1LFxuICAgICAgODIsXG4gICAgICA0MSxcbiAgICAgIDE4OCxcbiAgICAgIDgsXG4gICAgICAxMjYsXG4gICAgICAxNjgsXG4gICAgICAxNjIsXG4gICAgICAyNDMsXG4gICAgICAyMTMsXG4gICAgICAxMzcsXG4gICAgICAxMCxcbiAgICAgIDc1LFxuICAgICAgMTk5LFxuICAgICAgMTQ5LFxuICAgICAgMTE2LFxuICAgICAgMTY4LFxuICAgICAgMTkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZRSkJRWUxNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDMxMTY1NDQ3OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi6pyw4bSH4bSPXCIsXG4gICAgXCJsaWRcIjogXCIyNTE2NTU1Mzg4ODQ2MzM6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDZCcSt3R0VJemlocmdHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSUmh6Zlh0SXVQQVQ0eDBEVUJ6K2tZU28xSnZOSURaZ3A5aVNqSEN2WkZRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1ZZzhiUkQwQ2Y1VnQ4NHZuWWhva09pUjk2M3E4bTBTY3BRNlQrSVBxTU1SdU1jOHRudVV5RFp6T05mMmtqZTlCRHI2Q3h3VXJDQ2d0QzIvTHFFd0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRjbCtwamN1ZTJZeGdaWEUvUE1WNGFxMzB5b2RxVGEvYlhrRkdXd2V4elVNSlRhT0tjZVpJS1BsSHRhQ2JRTHZGbFcwZEM3M21CYWlVOXVDZkh1M0NRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzExNjU0NDc6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODE2NDExMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlmM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWYzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRVlJWXdBMUp0WXJMeEdjbklxU0ZYZ2o3dllVM0RtR1Nib0U3UEhNRFFBRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODM3ODA5OTE4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
