function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["Subsystem:1"] = "Subsystem.c:33,40,47,54&Subsystem.h:38";
	/* <Root>/In2 */
	this.urlHashMap["Subsystem:10"] = "Subsystem.c:34,41,48,55&Subsystem.h:39";
	/* <Root>/Out1 */
	this.urlHashMap["Subsystem:6"] = "Subsystem.c:32&Subsystem.h:44";
	/* <Root>/Out2 */
	this.urlHashMap["Subsystem:7"] = "Subsystem.c:39&Subsystem.h:45";
	/* <Root>/Out3 */
	this.urlHashMap["Subsystem:8"] = "Subsystem.c:46&Subsystem.h:46";
	/* <Root>/Out4 */
	this.urlHashMap["Subsystem:9"] = "Subsystem.c:53&Subsystem.h:47";
	/* <S1>/Add */
	this.urlHashMap["Subsystem:2"] = "Subsystem.c:35";
	/* <S1>/Divide */
	this.urlHashMap["Subsystem:5"] = "Subsystem.c:56";
	/* <S1>/Product */
	this.urlHashMap["Subsystem:4"] = "Subsystem.c:49";
	/* <S1>/Subtract */
	this.urlHashMap["Subsystem:3"] = "Subsystem.c:42";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Subsystem"};
	this.sidHashMap["Subsystem"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Subsystem:11"};
	this.sidHashMap["Subsystem:11"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Subsystem:1"};
	this.sidHashMap["Subsystem:1"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "Subsystem:10"};
	this.sidHashMap["Subsystem:10"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/Subsystem"] = {sid: "Subsystem:11"};
	this.sidHashMap["Subsystem:11"] = {rtwname: "<Root>/Subsystem"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Subsystem:6"};
	this.sidHashMap["Subsystem:6"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "Subsystem:7"};
	this.sidHashMap["Subsystem:7"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "Subsystem:8"};
	this.sidHashMap["Subsystem:8"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "Subsystem:9"};
	this.sidHashMap["Subsystem:9"] = {rtwname: "<Root>/Out4"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "Subsystem:12"};
	this.sidHashMap["Subsystem:12"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/In2"] = {sid: "Subsystem:13"};
	this.sidHashMap["Subsystem:13"] = {rtwname: "<S1>/In2"};
	this.rtwnameHashMap["<S1>/Add"] = {sid: "Subsystem:2"};
	this.sidHashMap["Subsystem:2"] = {rtwname: "<S1>/Add"};
	this.rtwnameHashMap["<S1>/Divide"] = {sid: "Subsystem:5"};
	this.sidHashMap["Subsystem:5"] = {rtwname: "<S1>/Divide"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "Subsystem:4"};
	this.sidHashMap["Subsystem:4"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Subtract"] = {sid: "Subsystem:3"};
	this.sidHashMap["Subsystem:3"] = {rtwname: "<S1>/Subtract"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "Subsystem:14"};
	this.sidHashMap["Subsystem:14"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S1>/Out2"] = {sid: "Subsystem:15"};
	this.sidHashMap["Subsystem:15"] = {rtwname: "<S1>/Out2"};
	this.rtwnameHashMap["<S1>/Out3"] = {sid: "Subsystem:16"};
	this.sidHashMap["Subsystem:16"] = {rtwname: "<S1>/Out3"};
	this.rtwnameHashMap["<S1>/Out4"] = {sid: "Subsystem:17"};
	this.sidHashMap["Subsystem:17"] = {rtwname: "<S1>/Out4"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
