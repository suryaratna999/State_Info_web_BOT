var sName = new Array();
sName[0] = 'state:Andhra pradesh,AP CM: Y S Jaganmohan Reddy , Governor: Biswabhusan Harichandan , Capital: Amaravati , No.of.disticts: 13 , Famous Dance: Kuchipudi , Covid Active case: 40047';
sName[1] = 'state:Telangana , TS CM: K. Chandrashekar Rao , Governor: Tamilisai Soundararajan , Capital: Hyderabad , No.of.disticts: 31 , Famous Dance: Gusadi , Covid Active case: 23203';
sName[2] = 'state:Assam , Assam CM: Sarbananda Sonowal , Governor: Jagdish Mukhi , Capital: Dispur , No.of.disticts: 34 , Famous Dance: Bihu , Covid Active case: 28804';
sName[3] = 'state:chhattisgarh , CM: Bhupesh Baghel , Governor: Anusuiya Uikey , Capital: Raipur , No.of.disticts: 28 , Famous Dance: Folk dance , Covid Active case: 433';
sName[4] = 'state:Bihar , CM: Nitish Kumar , Governor: Phagu chauhan , Capital: patna , No.of.disticts: 38 , Famous Dance: Bidesia , Covid Active case: 20922 ';
sName[5] = 'state:Goa , CM: Pramod Pandurag Sawant , Governor: Bhagat Singh Koshyari , Capital: panaji , No.of.disticts: 2 , Famous Dance: Fugdi , Covid Active case: 5423 ';
sName[6] = 'state:Gujarat , CM: Vijay Rupani , Governor: Acharya Devvrat , Capital: Ahmedabad , No.of.disticts: 33 , Famous Dance:  Garba , Covid Active case: 14782 ';
sName[7] = 'state:Haryana , CM: Monohar Lal Khattar , Governor: Satyadev Narayan Arya , Capital: Chandigarh , No.of.disticts: 22 , Famous Dance: naach , Covid Active case: 18185 ';
sName[8] = 'state:Himachal Pradesh , CM: Jai Ram Thakur , Governor: bandaru Dattatreya , Capital: Shimla , No.of.disticts: 12 , Famous Dance:  Nati , Covid Active case: 3161';
sName[9] = 'state:Jammu and kashmir , CM: Farooq Abdullah , Governor: Manoj Sinha , Capital: Srinaga , No.of.disticts: 20 , Famous Dance: Rouf Dance , Covid Active case: 54267 ';
sName[10]= 'state:Jharkhand , CM: Hemant Soren , Governor: Draupadi Murmu , Capital: ranchi , No.of.disticts: 24 , Famous Dance: Jhumair , Covid Active case: 8819';
sName[11]= 'state:Kharnataka , CM: B.S.Yediyurappa , Governor: Vajubhai vala , Capital: Mysore , No.of.disticts: 30 , Famous Dance: Dollu Kunitha , Covid Active case:113557';
sName[12]= 'state:Kerela , CM: Piaarayi Vijayan , Governor: Arif Mohammad Khan , Capital: Thiruvananthapuram , No.of.disticts: 14 , Famous Dance: Kathakali ,Covid Active case: 67061';
sName[13]= 'state:Maharastra , CM: Uddhav , Governor: Bhagat Siggh Koshyari , Capital: Mumbai , No.of.disticts: 36 , Famous Dance: Lavani , Covid Active case:23010';
sName[14]= 'state:Manipur , CM: N.Biven Singh , Governor: Najma Heptulla , Capital: Imphal , No.of.disticts: 16 , Famous Dance: Jagoi , Covid Active case: 714';
sName[15]= 'state:MadhyaPradesh , CM: Shivraj Singh Choham , Governor: Lalji Tandon , Capital: Bhopal , No.of.disticts: 52 , Famous Dance: Shikha Goyal ,Covid Active case: 18519';
sName[16]= 'state:Meghalaya ,CM: Conrad Sangma , Governor: satya Pal Malik , Capital: Shillong ,No.of.disticts: 11, Famous Dance: Nongkrem ,Covid Active case: 1193';
sName[17]= 'state:Mizoram , CM: zoramthanga ,Governor: P.S.Sreedharan Pillai, Capital: AiZawl,No.of.disticts: 11,Famous Dance: Bamboo dance,Covid Active case: 270';
sName[18]= 'state:Nagaland , CM: Neiphiu Rio , Governor: RN Ravi, Capital: Kohima , No.of.disticts: 12 , Famous Dance: War dance , Covid Active case:1221';
sName[19]= 'state:Odisha ,CM: Naveen Patnaik , Governor: Ganesh Lal , Capital: Bhubaneswar , No.of.disticts: 30 , Famous Dance: Ghumura,Covid Active case: 26891';
sName[20]= 'state:Punjab , CM: Amarinder Singh , Governor: V.P.Singh Badnore , Capital: Chandigarh , No.of.disticts: 22 , Famous Dance: Bhangra ,Covid Active case: 11982';
sName[21]= 'state:Rajasthan , CM: Ashok Gehlot , Governor: Kalraj Mishra , Capital: Jaipur , No.of.disticts: 33 , Famous Dance: Ghoomar , Covid Active case: 3219';
sName[22]= 'state:Sikkim , CM: Prem Singh Tamang , Governor: Ganga Prasad , Capital: Gangtok , No.of.disticts: 4 , Famous Dance: Maruni , Covid Active case: 344';
sName[23]= 'state:Tamilnadu , CM: K.Palaniswamy , Governor: Banwarilal , Capital: Chennai , No.of.disticts: 38, Famous Dance: Bharatanatyam ,Covid Active case: 57968';
sName[24]= 'state:Tripura , CM: Bipal Kumar Deb , Governor: Ramesh Bias , Capital: Agartala,No.of.disticts: 4 , Famous Dance: Hozagiri , Covid Active case: 3314';
sName[25]= 'state:Uttarpradesh , CM: Yogi Adityanath , Governor: Anandiben Patel , Capital: Lucknow , No.of.disticts: 75 , Famous Dance: Kathak , Covid Active case:45024';
function editChange() {
    var str = this.value.toLowerCase();
    var regex = new RegExp(str);
    var res = [];
    var len = sName.length;
    for (i = 0; i < len; i++) {
        if (sName[i].toLowerCase().match(regex)) {
            res.push(sName[i]);
        }
    }
    document.getElementById('result').innerHTML = res.join("<br>");
}
document.getElementById('myedit').onkeyup = editChange;