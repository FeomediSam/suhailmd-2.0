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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_53_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg5LFxuICAgICAgICA2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDcyLFxuICAgICAgICA0MyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExLFxuICAgICAgICAyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMixcbiAgICAgICAgMjM5LFxuICAgICAgICA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDU4LFxuICAgICAgICA0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJheHJLTlZuaDJldjU3K2o3ejRiSDFVNVFyZjA2emlMaGVkTTNydmdVQXpRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKeWZRS2FvRFNIYW8wS1lPYzU3UFJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI1OWQxZWZjLWJiZTAtNDU5MS1hNWNjLTgxNDFhOTBmN2Y4OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICAxODgsXG4gICAgICA3NSxcbiAgICAgIDIzOSxcbiAgICAgIDY0LFxuICAgICAgNDMsXG4gICAgICAzMixcbiAgICAgIDE0NyxcbiAgICAgIDIyNixcbiAgICAgIDIwNCxcbiAgICAgIDcxLFxuICAgICAgOTMsXG4gICAgICA1NSxcbiAgICAgIDI0OCxcbiAgICAgIDE2OSxcbiAgICAgIDEzOSxcbiAgICAgIDIzNSxcbiAgICAgIDIzMCxcbiAgICAgIDE1NSxcbiAgICAgIDEwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDM2LFxuICAgICAgMzMsXG4gICAgICA4LFxuICAgICAgNTQsXG4gICAgICA3OCxcbiAgICAgIDEyMSxcbiAgICAgIDE0NixcbiAgICAgIDEzMSxcbiAgICAgIDE4NSxcbiAgICAgIDEzMSxcbiAgICAgIDgsXG4gICAgICAyMixcbiAgICAgIDE0NixcbiAgICAgIDEzOSxcbiAgICAgIDIwOSxcbiAgICAgIDEyNCxcbiAgICAgIDQyLFxuICAgICAgMjUwLFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpUVEhKQUVSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY1MTU4NzcwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MzIxOTM0NTQ3Mzc1Mzo4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIktpbmcgS29iaSDwn5Kr8J+RkVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01YbDQ3OEhFTHFHckxzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYk8rTzNRSk1VRW9GT2x4cTMyRXZaSVJUL0Z4N214Q0xrWjdVajdXSHlXWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoME9KZjJ5cmxJdmFVeHBYZjJ0T0NPZUJCRmxBcW14Tkp6SVpUZDVaajFDdXI4aVIvcEJLMkdiRlhmb2VoU2VuZ3VtWWJGQzFIU0JGaUlBV1RnUGpDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUZVAzMG1yR3MrK1ZHeCtkR3p1WGRNZlBmbUtMLy9WMzh5ZHlUazdQSWQ5ajdKOEFoby95eThHSWlNMUMyMXlvM1Z3dnRsMXJObElIMkZxeXZ1WitDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY1MTU4NzcwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MDY2NDMwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1Q3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHVDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkWk5MSFB1MjM4MWRneTlmTEc3MVBIOThXdE90SXczemtRZEoyN0hkVkVNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMTI4MDM3ODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTA2NjQzNDY4MVwifSIKfQ=="  // PUT your SESSION_ID 


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
