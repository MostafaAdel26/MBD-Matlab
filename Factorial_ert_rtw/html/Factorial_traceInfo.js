function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["Factorial:5"] = "Factorial.h:40";
	/* <Root>/For Iterator
Subsystem */
	this.urlHashMap["Factorial:1"] = "Factorial.c:37,44";
	/* <Root>/Out1 */
	this.urlHashMap["Factorial:9"] = "Factorial.h:45";
	/* <S1>/For Iterator */
	this.urlHashMap["Factorial:3"] = "Factorial.c:38";
	/* <S1>/Product */
	this.urlHashMap["Factorial:7"] = "msg=rtwMsg_notTraceable&block=Factorial:7";
	/* <S1>/Unit Delay */
	this.urlHashMap["Factorial:8"] = "Factorial.c:40";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Factorial"};
	this.sidHashMap["Factorial"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "Factorial:1"};
	this.sidHashMap["Factorial:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "Factorial:5"};
	this.sidHashMap["Factorial:5"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/For Iterator Subsystem"] = {sid: "Factorial:1"};
	this.sidHashMap["Factorial:1"] = {rtwname: "<Root>/For Iterator Subsystem"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "Factorial:9"};
	this.sidHashMap["Factorial:9"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "Factorial:2"};
	this.sidHashMap["Factorial:2"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/For Iterator"] = {sid: "Factorial:3"};
	this.sidHashMap["Factorial:3"] = {rtwname: "<S1>/For Iterator"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "Factorial:7"};
	this.sidHashMap["Factorial:7"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Unit Delay"] = {sid: "Factorial:8"};
	this.sidHashMap["Factorial:8"] = {rtwname: "<S1>/Unit Delay"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "Factorial:4"};
	this.sidHashMap["Factorial:4"] = {rtwname: "<S1>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
