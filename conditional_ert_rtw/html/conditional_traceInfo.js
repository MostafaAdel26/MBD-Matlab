function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["conditional:36"] = "conditional.h:37";
	/* <Root>/Display */
	this.urlHashMap["conditional:43"] = "msg=rtwMsg_reducedBlock&block=conditional:43";
	/* <Root>/If */
	this.urlHashMap["conditional:3"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=conditional:3";
	/* <Root>/If Action
Subsystem */
	this.urlHashMap["conditional:4"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=conditional:4";
	/* <Root>/If Action
Subsystem1 */
	this.urlHashMap["conditional:8"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=conditional:8";
	/* <Root>/If Action
Subsystem2 */
	this.urlHashMap["conditional:22"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=conditional:22";
	/* <Root>/If Action
Subsystem3 */
	this.urlHashMap["conditional:26"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=conditional:26";
	/* <Root>/If Action
Subsystem4 */
	this.urlHashMap["conditional:30"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=conditional:30";
	/* <Root>/If1 */
	this.urlHashMap["conditional:34"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=conditional:34";
	/* <Root>/If2 */
	this.urlHashMap["conditional:35"] = "msg=rtwMsg_reducedBlock&block=conditional:35";
	/* <Root>/Merge */
	this.urlHashMap["conditional:15"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=conditional:15";
	/* <Root>/Out1 */
	this.urlHashMap["conditional:42"] = "conditional.c:32&conditional.h:42";
	/* <S1>/Constant */
	this.urlHashMap["conditional:44"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=conditional:44";
	/* <S2>/Constant */
	this.urlHashMap["conditional:45"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=conditional:45";
	/* <S3>/Constant */
	this.urlHashMap["conditional:46"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=conditional:46";
	/* <S4>/Constant */
	this.urlHashMap["conditional:47"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=conditional:47";
	/* <S5>/Constant */
	this.urlHashMap["conditional:48"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=conditional:48";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "conditional"};
	this.sidHashMap["conditional"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "conditional:4"};
	this.sidHashMap["conditional:4"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "conditional:8"};
	this.sidHashMap["conditional:8"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "conditional:22"};
	this.sidHashMap["conditional:22"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "conditional:26"};
	this.sidHashMap["conditional:26"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "conditional:30"};
	this.sidHashMap["conditional:30"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "conditional:36"};
	this.sidHashMap["conditional:36"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Display"] = {sid: "conditional:43"};
	this.sidHashMap["conditional:43"] = {rtwname: "<Root>/Display"};
	this.rtwnameHashMap["<Root>/If"] = {sid: "conditional:3"};
	this.sidHashMap["conditional:3"] = {rtwname: "<Root>/If"};
	this.rtwnameHashMap["<Root>/If Action Subsystem"] = {sid: "conditional:4"};
	this.sidHashMap["conditional:4"] = {rtwname: "<Root>/If Action Subsystem"};
	this.rtwnameHashMap["<Root>/If Action Subsystem1"] = {sid: "conditional:8"};
	this.sidHashMap["conditional:8"] = {rtwname: "<Root>/If Action Subsystem1"};
	this.rtwnameHashMap["<Root>/If Action Subsystem2"] = {sid: "conditional:22"};
	this.sidHashMap["conditional:22"] = {rtwname: "<Root>/If Action Subsystem2"};
	this.rtwnameHashMap["<Root>/If Action Subsystem3"] = {sid: "conditional:26"};
	this.sidHashMap["conditional:26"] = {rtwname: "<Root>/If Action Subsystem3"};
	this.rtwnameHashMap["<Root>/If Action Subsystem4"] = {sid: "conditional:30"};
	this.sidHashMap["conditional:30"] = {rtwname: "<Root>/If Action Subsystem4"};
	this.rtwnameHashMap["<Root>/If1"] = {sid: "conditional:34"};
	this.sidHashMap["conditional:34"] = {rtwname: "<Root>/If1"};
	this.rtwnameHashMap["<Root>/If2"] = {sid: "conditional:35"};
	this.sidHashMap["conditional:35"] = {rtwname: "<Root>/If2"};
	this.rtwnameHashMap["<Root>/Merge"] = {sid: "conditional:15"};
	this.sidHashMap["conditional:15"] = {rtwname: "<Root>/Merge"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "conditional:42"};
	this.sidHashMap["conditional:42"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/Action Port"] = {sid: "conditional:6"};
	this.sidHashMap["conditional:6"] = {rtwname: "<S1>/Action Port"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "conditional:44"};
	this.sidHashMap["conditional:44"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "conditional:7"};
	this.sidHashMap["conditional:7"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/Action Port"] = {sid: "conditional:10"};
	this.sidHashMap["conditional:10"] = {rtwname: "<S2>/Action Port"};
	this.rtwnameHashMap["<S2>/Constant"] = {sid: "conditional:45"};
	this.sidHashMap["conditional:45"] = {rtwname: "<S2>/Constant"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "conditional:11"};
	this.sidHashMap["conditional:11"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>/Action Port"] = {sid: "conditional:24"};
	this.sidHashMap["conditional:24"] = {rtwname: "<S3>/Action Port"};
	this.rtwnameHashMap["<S3>/Constant"] = {sid: "conditional:46"};
	this.sidHashMap["conditional:46"] = {rtwname: "<S3>/Constant"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "conditional:25"};
	this.sidHashMap["conditional:25"] = {rtwname: "<S3>/Out1"};
	this.rtwnameHashMap["<S4>/Action Port"] = {sid: "conditional:28"};
	this.sidHashMap["conditional:28"] = {rtwname: "<S4>/Action Port"};
	this.rtwnameHashMap["<S4>/Constant"] = {sid: "conditional:47"};
	this.sidHashMap["conditional:47"] = {rtwname: "<S4>/Constant"};
	this.rtwnameHashMap["<S4>/Out1"] = {sid: "conditional:29"};
	this.sidHashMap["conditional:29"] = {rtwname: "<S4>/Out1"};
	this.rtwnameHashMap["<S5>/Action Port"] = {sid: "conditional:32"};
	this.sidHashMap["conditional:32"] = {rtwname: "<S5>/Action Port"};
	this.rtwnameHashMap["<S5>/Constant"] = {sid: "conditional:48"};
	this.sidHashMap["conditional:48"] = {rtwname: "<S5>/Constant"};
	this.rtwnameHashMap["<S5>/Out1"] = {sid: "conditional:33"};
	this.sidHashMap["conditional:33"] = {rtwname: "<S5>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
