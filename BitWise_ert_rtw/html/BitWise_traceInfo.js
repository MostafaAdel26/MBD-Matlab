function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["BitWise:12"] = "BitWise.c:33,39,46,53,60&BitWise.h:38";
	/* <Root>/In2 */
	this.urlHashMap["BitWise:13"] = "BitWise.c:40,47,54,67&BitWise.h:39";
	/* <Root>/Bitwise
Operator */
	this.urlHashMap["BitWise:1"] = "BitWise.c:41";
	/* <Root>/Bitwise
Operator1 */
	this.urlHashMap["BitWise:2"] = "BitWise.c:48";
	/* <Root>/Bitwise
Operator2 */
	this.urlHashMap["BitWise:3"] = "BitWise.c:55";
	/* <Root>/Bitwise
Operator3 */
	this.urlHashMap["BitWise:4"] = "BitWise.c:61";
	/* <Root>/Bitwise
Operator4 */
	this.urlHashMap["BitWise:9"] = "BitWise.c:68";
	/* <Root>/Bitwise
Operator5 */
	this.urlHashMap["BitWise:10"] = "BitWise.c:62";
	/* <Root>/Bitwise
Operator6 */
	this.urlHashMap["BitWise:11"] = "BitWise.c:34";
	/* <Root>/Out1 */
	this.urlHashMap["BitWise:15"] = "BitWise.c:32&BitWise.h:44";
	/* <Root>/Out2 */
	this.urlHashMap["BitWise:16"] = "BitWise.c:38&BitWise.h:45";
	/* <Root>/Out3 */
	this.urlHashMap["BitWise:17"] = "BitWise.c:45&BitWise.h:46";
	/* <Root>/Out4 */
	this.urlHashMap["BitWise:18"] = "BitWise.c:52&BitWise.h:47";
	/* <Root>/Out5 */
	this.urlHashMap["BitWise:19"] = "BitWise.c:59&BitWise.h:48";
	/* <Root>/Out6 */
	this.urlHashMap["BitWise:20"] = "BitWise.c:66&BitWise.h:49";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "BitWise"};
	this.sidHashMap["BitWise"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "BitWise:12"};
	this.sidHashMap["BitWise:12"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "BitWise:13"};
	this.sidHashMap["BitWise:13"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/Bitwise Operator"] = {sid: "BitWise:1"};
	this.sidHashMap["BitWise:1"] = {rtwname: "<Root>/Bitwise Operator"};
	this.rtwnameHashMap["<Root>/Bitwise Operator1"] = {sid: "BitWise:2"};
	this.sidHashMap["BitWise:2"] = {rtwname: "<Root>/Bitwise Operator1"};
	this.rtwnameHashMap["<Root>/Bitwise Operator2"] = {sid: "BitWise:3"};
	this.sidHashMap["BitWise:3"] = {rtwname: "<Root>/Bitwise Operator2"};
	this.rtwnameHashMap["<Root>/Bitwise Operator3"] = {sid: "BitWise:4"};
	this.sidHashMap["BitWise:4"] = {rtwname: "<Root>/Bitwise Operator3"};
	this.rtwnameHashMap["<Root>/Bitwise Operator4"] = {sid: "BitWise:9"};
	this.sidHashMap["BitWise:9"] = {rtwname: "<Root>/Bitwise Operator4"};
	this.rtwnameHashMap["<Root>/Bitwise Operator5"] = {sid: "BitWise:10"};
	this.sidHashMap["BitWise:10"] = {rtwname: "<Root>/Bitwise Operator5"};
	this.rtwnameHashMap["<Root>/Bitwise Operator6"] = {sid: "BitWise:11"};
	this.sidHashMap["BitWise:11"] = {rtwname: "<Root>/Bitwise Operator6"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "BitWise:15"};
	this.sidHashMap["BitWise:15"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "BitWise:16"};
	this.sidHashMap["BitWise:16"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "BitWise:17"};
	this.sidHashMap["BitWise:17"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "BitWise:18"};
	this.sidHashMap["BitWise:18"] = {rtwname: "<Root>/Out4"};
	this.rtwnameHashMap["<Root>/Out5"] = {sid: "BitWise:19"};
	this.sidHashMap["BitWise:19"] = {rtwname: "<Root>/Out5"};
	this.rtwnameHashMap["<Root>/Out6"] = {sid: "BitWise:20"};
	this.sidHashMap["BitWise:20"] = {rtwname: "<Root>/Out6"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
