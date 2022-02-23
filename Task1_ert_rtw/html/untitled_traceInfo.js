function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["untitled:5"] = "untitled.h:40";
	/* <Root>/For Iterator
Subsystem */
	this.urlHashMap["untitled:1"] = "untitled.c:37,44";
	/* <Root>/Out1 */
	this.urlHashMap["untitled:9"] = "untitled.h:45";
	/* <S1>/For Iterator */
	this.urlHashMap["untitled:3"] = "untitled.c:38";
	/* <S1>/Product */
	this.urlHashMap["untitled:7"] = "msg=rtwMsg_notTraceable&block=untitled:7";
	/* <S1>/Unit Delay */
	this.urlHashMap["untitled:8"] = "untitled.c:40";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "untitled"};
	this.sidHashMap["untitled"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "untitled:1"};
	this.sidHashMap["untitled:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "untitled:5"};
	this.sidHashMap["untitled:5"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/For Iterator Subsystem"] = {sid: "untitled:1"};
	this.sidHashMap["untitled:1"] = {rtwname: "<Root>/For Iterator Subsystem"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "untitled:9"};
	this.sidHashMap["untitled:9"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "untitled:2"};
	this.sidHashMap["untitled:2"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/For Iterator"] = {sid: "untitled:3"};
	this.sidHashMap["untitled:3"] = {rtwname: "<S1>/For Iterator"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "untitled:7"};
	this.sidHashMap["untitled:7"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Unit Delay"] = {sid: "untitled:8"};
	this.sidHashMap["untitled:8"] = {rtwname: "<S1>/Unit Delay"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "untitled:4"};
	this.sidHashMap["untitled:4"] = {rtwname: "<S1>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
