// --- Day 5: Doesn't He Have Intern-Elves For This? ---
// Santa needs help figuring out which strings in his text file are naughty or nice.

// A nice string is one with all of the following properties:

// It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
// It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
// It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
// For example:

// ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
// aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
// jchzalrnumimnmhp is naughty because it has no double letter.
// haegwjzuvuyypxyu is naughty because it contains the string xy.
// dvszwmarrgswjxmb is naughty because it contains only one vowel.
// How many strings are nice?

// Your puzzle answer was 238.

const fs = require("fs");
const text = fs.readFileSync("./day5.txt", data =>{return data}).toString();
const array = text.split("\r\n");

const threeVowels = (str) =>{
	if(str.match(/a|e|i|o|u/g) == null){
		return false;
	}
	return str.match(/a|e|i|o|u/g).length >= 3;
};

const twiceInARow = (str) =>{
	for (j=1 ; j<str.length ; j++){
		if(str.charAt(j).charCodeAt(0) - str.charAt(j-1).charCodeAt(0) == 0){
			return true;
		}
	}
	return false
}

const doesNotContain = (str) =>{
	return !(str.includes("ab")||str.includes("cd")||str.includes("pq")||str.includes("xy"));
}

const evaluate = (str) =>{
	return threeVowels(str) && twiceInARow(str) && doesNotContain(str);
}

let count = 0;
for (i=0; i<array.length ; i++){
	if (evaluate(array[i])){
		console.log(`String: ${array[i]}, Match at line ${i + 1}`);
		count++;
	}
}
console.log(`Result ${count}`);

// String: urrvucyrzzzooxhx, Match at line 6
// String: mayoqiswqqryvqdi, Match at line 10
// String: iiyrkoujhgpgkcvx, Match at line 11
// String: eytquncjituzzhsx, Match at line 14
// String: zettygjpcoedwyio, Match at line 16
// String: sfxhhdhaopajbzof, Match at line 23
// String: uqfpeauqzumccnrc, Match at line 25
// String: tdflsbtiiepijanf, Match at line 26
// String: xobfthcuuzhvhzpn, Match at line 28
// String: hekxiofhalvmmkdl, Match at line 32
// String: ldhkzhejofreaucc, Match at line 35
// String: wmveqrezfkaivvaw, Match at line 37
// String: sufltffwqbugmozk, Match at line 46
// String: qaqlyoyouotsmamm, Match at line 57
// String: ovvqestjhbuhrwlr, Match at line 61
// String: xopwzoaqtlukwwdu, Match at line 65
// String: bbdlivmchvzfuhoc, Match at line 68
// String: mmjrskloposgjoqu, Match at line 80
// String: ttmukbmpoagthtfl, Match at line 84
// String: kyzorvtopjiyyyqg, Match at line 92
// String: khaldwntissbijiz, Match at line 95
// String: aoojqakosnaxosom, Match at line 96
// String: xuejivogihttzimd, Match at line 102
// String: bugepxgpgahtsttl, Match at line 103
// String: hclsekryiwhqqhir, Match at line 108
// String: xljdvbucuxnnaysv, Match at line 111
// String: irqceqtqwemostbb, Match at line 112
// String: cgfklbljeneeqfub, Match at line 114
// String: zudyqkuqqtdcpmuo, Match at line 115
// String: lkvovtsqanohzcmm, Match at line 121
// String: kurdpaqiaagiwjle, Match at line 123
// String: rbaamufphjsjhbdl, Match at line 125
// String: hiwoetbfywaeddtx, Match at line 128
// String: fjirczxtuupfywyf, Match at line 129
// String: omeoegeyyospreem, Match at line 130
// String: aqskaxjjborspfaa, Match at line 138
// String: wientdsttkevjtkf, Match at line 139
// String: voucjhzvkkhuwoqk, Match at line 141
// String: boaaruhalgaamqmh, Match at line 142
// String: wjelolsrbginwnno, Match at line 150
// String: rsvqimuqbuddozrf, Match at line 156
// String: meppxdrenexxksdt, Match at line 157
// String: mhowloqnppswyzbu, Match at line 160
// String: qzquxawqmupeujrr, Match at line 173
// String: suupfxbtoojqvdca, Match at line 175
// String: tcchwpuouypllcxe, Match at line 180
// String: iwmbeunfiuhjaaic, Match at line 191
// String: ieqspassuvquvlyz, Match at line 193
// String: xshhahjaxjoqsjtl, Match at line 194
// String: amcgorhxjcybbisv, Match at line 201
// String: kifnymikhhehgote, Match at line 209
// String: azzxtstaevxurboa, Match at line 213
// String: zolcffdtobfntifb, Match at line 223
// String: tpeddioybqemyvqz, Match at line 229
// String: pyikzbxoapffbqjw, Match at line 235
// String: tntthdowhewszitu, Match at line 245
// String: ymfrbxwrawejkduu, Match at line 249
// String: qzqizpiyfasgttex, Match at line 251
// String: qnmoemcpuckzsshx, Match at line 252
// String: ddyqiihagcmnxccu, Match at line 253
// String: phpaoozbdogbushy, Match at line 255
// String: aurbbphvjtzipnuh, Match at line 257
// String: hbuyxeylddfgorgu, Match at line 266
// String: kouiuxckkvmetvdy, Match at line 270
// String: trctlytzwiisjamx, Match at line 272
// String: gyecxacqitgozzgd, Match at line 277
// String: zfrswnskuupivzxb, Match at line 281
// String: xdwrhwtuooikehbk, Match at line 289
// String: cinrzzradwymqcgu, Match at line 301
// String: ceaouqquvvienszn, Match at line 307
// String: bwzmmvkuaxiymzwc, Match at line 313
// String: gjriqsfrhyguoiiw, Match at line 315
// String: gtfyomppzsruhuac, Match at line 316
// String: ngvssuwrbtoxtrka, Match at line 320
// String: igxfnxtwpyaamkxf, Match at line 324
// String: gsccjacboqvezxvd, Match at line 328
// String: xwwzstmozqarurrq, Match at line 335
// String: zzuhqokgmisguyna, Match at line 344
// String: juududyojcazzgvr, Match at line 354
// String: vevmmqlehvgebmid, Match at line 360
// String: ybfgbwxaaitpwryg, Match at line 364
// String: syjugymeajlzffhq, Match at line 373
// String: enxbgvvcuqeloxud, Match at line 378
// String: hazlqpetgugxxsiz, Match at line 381
// String: pjtuxskkowutltlq, Match at line 387
// String: namzqovvsdipazae, Match at line 389
// String: gseupzwowmuuibjo, Match at line 396
// String: dfzsffsqpaqoixhh, Match at line 397
// String: gdkcluwjhtaaprfo, Match at line 403
// String: wpdcrramajdoisxr, Match at line 412
// String: fqpvaamqbrnatjia, Match at line 416
// String: onchdguuhrhhspen, Match at line 420
// String: bvpvwrhoyneorcmm, Match at line 425
// String: nizjxiwdakpfttyh, Match at line 428
// String: nwrkbhorhfqqoliz, Match at line 429
// String: uavfnvyrjeiwqmuu, Match at line 444
// String: odsnbtyimikkbmdd, Match at line 450
// String: vuryaohxdvjllieb, Match at line 451
// String: dhaxldeywwsfamlo, Match at line 452
// String: ctnqnhkcooqipgkh, Match at line 457
// String: koennvmolejeftij, Match at line 459
// String: mmsmhkxaiqupfjil, Match at line 462
// String: ypjwoemqizddvyfd, Match at line 463
// String: hdhwcpeuptgqqvim, Match at line 468
// String: gsxlruhjeaareilr, Match at line 469
// String: eewezahlumervpyu, Match at line 471
// String: iiolebrxfadtnigy, Match at line 472
// String: gidljbuvuovkhhrf, Match at line 475
// String: qwfcpilbjwzboohd, Match at line 476
// String: yzynmnnoumkmlbeh, Match at line 483
// String: qqflecydqvlogjme, Match at line 491
// String: nsvsauxzfbbotgmh, Match at line 495
// String: tblcpuhjyybrlica, Match at line 496
// String: layenyqgxdfggloc, Match at line 500
// String: uoghiuosiiwiwdws, Match at line 503
// String: zlxbddpnyuyapach, Match at line 515
// String: xpmrxxepkrosnrco, Match at line 523
// String: pehmzrzsjngccale, Match at line 526
// String: bsnansnfxduritrr, Match at line 527
// String: vvusvrivsmhtfild, Match at line 535
// String: ifhhjpaqatpbxzau, Match at line 537
// String: velxsseyxuhrpycy, Match at line 557
// String: jlyggqdtamcjiuxn, Match at line 562
// String: olxxqfgizjmvigvl, Match at line 563
// String: xzvvndrhuejnzesx, Match at line 567
// String: esiripjpvtqqwjkv, Match at line 568
// String: xkfywvvugkdalehs, Match at line 572
// String: cztwdivxagtqjjel, Match at line 573
// String: fmlrzqmazajxeedl, Match at line 590
// String: ssaqruwarlvxrqzm, Match at line 594
// String: iaxbpeqqzlcwfqjz, Match at line 595
// String: uwyxshjutkanvvsc, Match at line 596
// String: uxwrlwbblcianvnb, Match at line 597
// String: zdrsnoorwqfalnha, Match at line 605
// String: xlgmissaiqmowppd, Match at line 606
// String: fydlahgxtekbweet, Match at line 608
// String: zsofhaqqghncmzuw, Match at line 614
// String: bkhyxjkrqbbunido, Match at line 616
// String: builayfduxbppafc, Match at line 618
// String: wedllowzeuswkuez, Match at line 619
// String: xxwhxwiinchqqudr, Match at line 630
// String: usfenmavvuevevgr, Match at line 631
// String: vhqnydeboeunnvyk, Match at line 633
// String: rrioqjluawwwnjcr, Match at line 636
// String: fiaeyggmgijnasot, Match at line 637
// String: uzphtrpxwfnaiidz, Match at line 639
// String: nmfvoqgoppoyosaj, Match at line 647
// String: hxjkcppaisezygpe, Match at line 648
// String: icvnysgixapvtoos, Match at line 649
// String: ouwwkfhcedsgqqxe, Match at line 653
// String: owroouiyptrijzgv, Match at line 654
// String: catppmrovqavxstn, Match at line 657
// String: lynnaujghehmpfpt, Match at line 661
// String: vrseaozoheawffoq, Match at line 662
// String: sezawbudymfvziff, Match at line 664
// String: gbzurepoojlwucuy, Match at line 669
// String: rsiaqiiipjlouecx, Match at line 670
// String: ldexambveeosaimo, Match at line 673
// String: byacsxavjboovukk, Match at line 689
// String: awugnhcrygaoppjq, Match at line 690
// String: iaqyqmcaedscmakk, Match at line 698
// String: jjjrprbnlijzatuw, Match at line 700
// String: nokmiitzrigxavsc, Match at line 704
// String: etzoxwzxqkkhvais, Match at line 705
// String: urxxfacgjccieufi, Match at line 706
// String: hhrotenctylggzaf, Match at line 709
// String: zoikunqxgjwfqqwr, Match at line 733
// String: vcxamijpoyyksogn, Match at line 736
// String: jurfqqawafmsiqwv, Match at line 738
// String: xewbavjeppflwscl, Match at line 741
// String: mfmygcllauzuoaok, Match at line 744
// String: oibkuxhjmhxhhzby, Match at line 745
// String: avnnxmopdgvmukuu, Match at line 747
// String: jmaargejcwboqhkt, Match at line 748
// String: iqhgupookcaovwgh, Match at line 750
// String: ifyibukeffkbqvcr, Match at line 753
// String: sunaucaucykwtkjj, Match at line 759
// String: pumqkglgfdhneero, Match at line 760
// String: knywgmclisgpootg, Match at line 763
// String: vobhwwocqttlbsik, Match at line 766
// String: wbqgqkwbibiilhzc, Match at line 768
// String: ewjcmzkcnautrrmp, Match at line 773
// String: pzoelkoidwglpttc, Match at line 781
// String: casafubtkoopuaju, Match at line 785
// String: yylsfarntbucfulg, Match at line 786
// String: rrefrjjxerphejwb, Match at line 791
// String: guuazonjoebhymtm, Match at line 792
// String: wvakvephyukmpemm, Match at line 796
// String: simxacxxzfoaeddw, Match at line 797
// String: mmuglnjmuddzgaik, Match at line 800
// String: xnvcsiiqrcjkvecn, Match at line 802
// String: kkvumxtvashxcops, Match at line 803
// String: bduflsdyeectvcgl, Match at line 804
// String: eeqtdneiyiaiofxw, Match at line 806
// String: uuutuoxdsxolpbhd, Match at line 808
// String: xxlocexbmniiakfo, Match at line 816
// String: vohekwkuyuoacuww, Match at line 819
// String: joakcwpfggtitizs, Match at line 823
// String: vqwndafvmpguggef, Match at line 833
// String: mmforetykbosdwce, Match at line 837
// String: vzxbttoobtvdtkca, Match at line 855
// String: ggluurzavsxkvwkl, Match at line 861
// String: eemwekimdfvqslsx, Match at line 865
// String: yjkwpzrbanoaajgq, Match at line 866
// String: hozbgdoorhthlqpv, Match at line 868
// String: raawxozucfqvasru, Match at line 875
// String: jqzcfggayzyoqteo, Match at line 879
// String: aufajwfrsorqqsnl, Match at line 883
// String: ofkvrorwwhusyxjx, Match at line 889
// String: yxfxaqipmysahqqq, Match at line 891
// String: himixxvueksiqfdf, Match at line 896
// String: adiioqeiejguaost, Match at line 898
// String: xedbpxdhphamoodk, Match at line 900
// String: mtsynnfxunuohbnf, Match at line 902
// String: enamqzfzjunnnkpe, Match at line 903
// String: zopllxnidcffcuau, Match at line 912
// String: nejwxbhjxxdbenid, Match at line 915
// String: guoeefaeafhlgvxh, Match at line 917
// String: kozmlmbchydtxeeo, Match at line 920
// String: uqjzalppoorosxxo, Match at line 923
// String: pybxizvuiwwngqej, Match at line 929
// String: zfumwnazxwwxtiry, Match at line 930
// String: keboraqttctosemx, Match at line 931
// String: ejatfnyjjdawepyk, Match at line 934
// String: mpcrobansyssvmju, Match at line 935
// String: atcfrowdflluqtbi, Match at line 941
// String: tmssrtlxfouowqnr, Match at line 949
// String: ntutrvwnzzgmokes, Match at line 950
// String: kadkaftffaziqdze, Match at line 953
// String: kntwbvhuaahdixzj, Match at line 960
// String: fhgepuluczttfvqh, Match at line 973
// String: gffxatrjglkcehim, Match at line 975
// String: qfooyczdzoewrmku, Match at line 978
// String: rvlwikuqdbpjuvoo, Match at line 979
// String: txntccjmqakcoorp, Match at line 983
// String: feyeqguxbgmcmgpp, Match at line 989
// String: mzuuwbhzdjfdryxu, Match at line 991
// String: sztzziuqroeidcus, Match at line 997
// Result 238