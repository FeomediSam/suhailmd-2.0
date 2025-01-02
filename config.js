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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_05_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDc1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDMzLFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDksXG4gICAgICAgIDIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxODksXG4gICAgICAgIDU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIyLFxuICAgICAgICA2NixcbiAgICAgICAgNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDc4LFxuICAgICAgICA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc1LFxuICAgICAgICAyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMixcbiAgICAgICAgNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDczLFxuICAgICAgICAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMwLFxuICAgICAgICAzNixcbiAgICAgICAgMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2K01xb2dYc045b2RKVHlUOGsrdmV3cEx6SERWNFQyU3FFcjRRU2NTQWZrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfaDByeGNmV1JadUNSeTlLYVgwUlh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjk0MDBmZWZhLTg4NGQtNDY0Yi05MWU3LTJlY2FhMGM1MGFhMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDIsXG4gICAgICAyMDYsXG4gICAgICAxNzUsXG4gICAgICAxMjYsXG4gICAgICA4NixcbiAgICAgIDI1NSxcbiAgICAgIDEzMCxcbiAgICAgIDIxNSxcbiAgICAgIDE1NyxcbiAgICAgIDQwLFxuICAgICAgMTAsXG4gICAgICA2MyxcbiAgICAgIDIxMixcbiAgICAgIDEzMCxcbiAgICAgIDE3NyxcbiAgICAgIDE2NCxcbiAgICAgIDIzNCxcbiAgICAgIDIyOCxcbiAgICAgIDIsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDM0LFxuICAgICAgMTE4LFxuICAgICAgNDQsXG4gICAgICAxMDIsXG4gICAgICAxNDYsXG4gICAgICAyMDIsXG4gICAgICAxNzcsXG4gICAgICAyNTEsXG4gICAgICAxOCxcbiAgICAgIDkwLFxuICAgICAgMTQyLFxuICAgICAgNjYsXG4gICAgICAxNzAsXG4gICAgICA0MyxcbiAgICAgIDE0NSxcbiAgICAgIDE4MSxcbiAgICAgIDQ3LFxuICAgICAgMjI3LFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkwxOUVEUEhXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDczNjk3MjI1OjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NjgyNzMyNzMzNjU2OTo1NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMYm0vcHdCRUtYLzI3c0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZ1MFl3WmtCcEIwSUZCUk5sa3F1M2lIYjEvWFhnZmVoMnE1K0tRNkdnRDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU2puT2dxaUtPVlI5a0gzdjV4T0xKM3lYMlJYOXRaT3JLcExTeGVXR1dsK0dIVndrK0kvSGt4SlBaNEY5Mi9JUWZaMHZXdDg1WlY3eWhrWW55RDl6Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS3E4OG1mb215eU8xcjlLYU1CZmxsQTQ0RHcramdRL2h4TkxCVHpmUEV3bCtxK1YrVis0dGRGd2dKL2F6VjlJOGFJNWhtVU9qYnZXVVN3YXEzalhlQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA3MzY5NzIyNTo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTg1MTk0NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
