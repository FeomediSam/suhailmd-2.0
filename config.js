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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_19_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0LFxuICAgICAgICA5MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDI2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDU5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE0LFxuICAgICAgICA1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICA3OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTksXG4gICAgICAgIDg4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNixcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAyNixcbiAgICAgICAgMjM0LFxuICAgICAgICA3OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyLFxuICAgICAgICAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMwLFxuICAgICAgICAzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkwLFxuICAgICAgICA3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDMyLFxuICAgICAgICA4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDMsXG4gICAgICAgIDU4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MixcbiAgICAgICAgMjE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDYwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWOGJqTDMycWNoQzNuU1Y4RlpLS3ZMMmc2bUJOeXhEdFh5M1NuV05RM0l3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTYxMzM3NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA1MjRGNDVBODQwRDRBQ0JGQzU3RUFFNDk4RjJFOTc4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTg2NzU4MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDcEl6eEMtT1E0V1otSVBwZFI1eGFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRmYzkyYTRiLTBjNzMtNDg0OS05YzVkLTY2MzBhNTJhODBlYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAxMDUsXG4gICAgICAxMSxcbiAgICAgIDE5MyxcbiAgICAgIDIwOCxcbiAgICAgIDk4LFxuICAgICAgMTUxLFxuICAgICAgNTksXG4gICAgICA2MCxcbiAgICAgIDUsXG4gICAgICA3OSxcbiAgICAgIDMsXG4gICAgICAzOCxcbiAgICAgIDEwNixcbiAgICAgIDIxMSxcbiAgICAgIDQ3LFxuICAgICAgNjEsXG4gICAgICA4OSxcbiAgICAgIDgyLFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA3LFxuICAgICAgMTY5LFxuICAgICAgMTM1LFxuICAgICAgMTkyLFxuICAgICAgMjQxLFxuICAgICAgMTE5LFxuICAgICAgMjA2LFxuICAgICAgMTgxLFxuICAgICAgMTE0LFxuICAgICAgMjQ5LFxuICAgICAgMTgxLFxuICAgICAgMTYzLFxuICAgICAgOTcsXG4gICAgICAxNDQsXG4gICAgICA5OCxcbiAgICAgIDY4LFxuICAgICAgMTM4LFxuICAgICAgMjI5LFxuICAgICAgMTYzLFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUFdQRENSSEpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTYxMzM3Njg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA3MTcyNzcxOTY3MDkzOjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4ZGV4Zep4ZGOJ1Qg4ZaH4Ze04Zew4Ze04Zew4Ze34Ze04ZaHIPCfpbLwn6WyXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXZmMTdBQ0VMTG42TGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTblFzb1RjMDliYVp5alVSemhRSVgvSTJIZmQ2UzhWU3EwekRnYXFhNzA4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNYcUk1SXVOTUFtUExiK1h4Q3p3QnVranQ0WU5KZnpPcVJkODhFVXB5bUsza051Qjh3SEg1RXhEOXFMUDladmNOR0NHbWVnM3VnbDE2QjA4RVk5SEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZrYmU4WVFZa2xNZjNaekxVNkMxY0ZrS2hiRjVCSWtNcXhXbnRyVGRVUy9sRzFYdzBZVitYcldBZm1rdDdBRFpkc0hheDFNcXQ1dzNEdDlGclZxUUJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTYxMzM3Njg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxODY3NTc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2RyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDZHIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGcm9DalBXMm9GQ0dsUXVSOWhiMlJhRVBSRko3ZDJGaUJYS0tnSDQ0anZzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYzODk3MTg1MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxODY3NTc4NzAyXCJ9Igp9"  // PUT your SESSION_ID 


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
