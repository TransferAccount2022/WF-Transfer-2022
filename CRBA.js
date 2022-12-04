var tree = "JSONtrees/CRBATree.json";
// var tree = "JSONtrees/demoTree.json";
var levels = 12;
treeHeight = 1000;


function fillModal(id) {
  switch (id) {
    case "popup1":
      $("#modalTitle").text("Exemptions");
      $("#modalBody").html(`<p>There are a number of reasons why you may not be required to provide a DNA sample. You qualify for an exemption if:</p>
     <ol>
     <li>You are a lawful resident of the United States; </li>
     <li>You are being processed for admission at the border; </li>
     <li>You are a Visa Waiver Program refusal; </li>
     <li>You are having a medical emergency;</li>
     <li>You have withdrawn your application for admission. </li>
     </ol>
     <p> Relevant law: <a href= "https://www.law.cornell.edu/cfr/text/28/28.12" target = "_blank">28 CFR § 28.12 (b)</a></p>
     `);
      break;
    case "popup2":
      $("#modalTitle").text("No DNA collection required");
      $("#modalBody").html(`<p>  Since you qualify for an exemption, you should not be required to provide a DNA sample. </p>
     `);
      break;
    case "popup3":
      $("#modalTitle").text("Seek legal advice");
      $("#modalBody").html(`<p>There are many free or low-cost immigration services available for migrants in need of legal advice. The Immigration Advocacy Network's <a href= "https://www.immigrationadvocates.org/legaldirectory/" target = "_blank"><b>National Immigration Legal Services Directory</b></a> is an excellent resource for identifying and contact legal aid organizations.</p>
      `);
      break;
    case "popup4":
      $("#modalTitle").text("What happens next?");
      $("#modalBody").html(`<p>Migrant DNA collected by CBP and processed through an FBI Laboratory will be stored in the National DNA Index System (“NDIS”), a national inventory of DNA profiles contributed by federal, state, and local forensic laboratories. The NDIS contains the data of convicted offenders, arrestees, detainees, missing persons, relatives of missing persons and more, as submitted by accredited labs around the United States. It is part of the Combined DNA Index System (“CODIS”), a tool utilized by law enforcement agencies to link individuals to crimes based on DNA evidence, identify unidentified human remains and search for missing persons. </p><br>
      <h6><b>What information is stored in CODIS?</b></h6>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the immigration context, CODIS stores only the following information:</p>
      <ol>
      <li>The DNA profile; </li>
      <li>The Agency Identifier (for the agency that submitted the DNA profile);</li>
      <li>The Specimen Identification Number (does not correlate to other personal information like social security numbers or A-Numbers);</li>
      <li>The DNA laboratory personnel associated with the DNA profile analysis.</li>
      </ol><br>
      <h6><b>Who has access to the information stored in CODIS?</b></h6>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Federal, state and local law enforcement agencies have access to CODIS. CODIS may also be accessed in judicial proceedings, such as removal hearings. Defendants in criminal cases may access the samples and analyses performed in connection with their case, but they may not access other data contained in CODIS.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Additionally, CODIS data may be accessed by criminal justice agencies for a population statistics database, for identification research and protocol development purposes, or for quality control.</p><br>
      <h6><b>How secure is CODIS?</b></h6>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;The computer terminals containing the CODIS are located in a physically secure location and access is restricted to only authorized individuals. </p><br>
      <h6><b>Can I get my information removed from CODIS?</b></h6>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Good question! I’m working on an answer… There’s some indication that you can get an expungement, but it is unclear if this applies to immigrant detainees.<br><br>${recap} <i class='fas fa-arrow-right summary-arrow'></i>If the lab produces a DNA profile, it will be stored in a federal database</p>
      `);
      break;
    case "popup5":
      $("#modalTitle").text("Criminal Charges");
      $("#modalBody").html(`<p> According to <a href= "https://www.law.cornell.edu/uscode/text/34/40702" target = "_blank">34 U.S.C. § 40702(a)(5)</a>, failure to cooperate in the collection of a DNA sample is a class A misdemeanor under federal law.</p>
      `);
      break;
    case "popupProof":
      $("#modalTitle").text("Documentary Proof");
      $("#modalBody").html(`<p> You must provide sufficient proof of your parentage in order to acquire citizenship. </p></br>
      <p>Ideally, you will be able to provide "primary evidence" of your parentage. The following four items are typically accepted as primary evidence:<p>
      <ul>
      <li>a U.S. passport;</li>
      <li>a Consular Report of Birth Abroad;</li>
      <li>a Certificate of Naturalization;</li>
      <li>or a Certificate of Citizenship.</li>
      </ul></br>
      <p> However, if you cannot provide primary evidence, you may be asked to provide secondary evidence. Examples of secondary evidence includes:</p>
      <ul>
      <li>Your foreign birth certificate, listing your parents;</li>
      <li>Your parent(s)' evidence of U.S. citizenship;</li>
      <li>Adoption decrees (if applicable).</li>
      </ul></br>
      <p>The amount and type of secondary evidence that may be requested varies greatly. Providing secondary evidence does not guarantee that your claim will be recognized, but provides valuable support.</p></br>
      <p>For more case-specific guidance on required documentation, click <a href= "https://travel.state.gov/content/travel/en/passports/how-apply/citizenship-evidence.html" target = "_blank">here</a>.</p>
      `);
      break;
    case "popupWhy":
      $("#modalTitle").text("Why DNA testing?");
      $("#modalBody").html(`<p> Although you <b>are not required</b> to submit to DNA testing, if you lack other sufficient documentary proof, it may be recommended that you submit to DNA testing as a last resort.</p>
      `);
      break;
    case "popupFraud":
      $("#modalTitle").text("Fraud");
      $("#modalBoday").html(`
      <p> For fathers, circumstances that allegedly constitute evidence of fraud include, but <b>are not limited to:</b></p>
      <ul>
      <li>Being away from the mother during the window of conception;</li>
      <li>the mother admitting that she had physical relationships with other men around the time of conception;</li>
      <li>differences in physical characteristics between father and child;</li>
      <li>discrepancies in birth records or other documentary proof.</li>
      </ul><br>
      <p> For mothers, circumstances that allegedly constitute evidence of fraud include, but <b>are not limited to:</b></p>
      <ul>
      <li>Arriving in the foreign country a few days before the child's birth;</li>
      <li>being beyond normal child-bearing years;</li>
      <li>differences in physical characteristics between either parent and child;</li>
      <li>discrepancies in birth records or other documentary records.</li>
      </ul><br></br>`);
    case "popupClaiming":
      $("#modalTitle").text("Claiming Citizenship Through Parentage");
      $("#modalBody").html(`<p>If you were born abroad to U.S. citizen parents, you may have a claim to U.S. citizenship. There are a number of reasons why such claims may be made, including when applying for a <a href = "https://travel.state.gov/content/travel/en/passports/need-passport/outside-us.html"  target = "_blank">U.S. passport</a> or filing an <a href = "https://www.uscis.gov/n-600" target = "_blank">Application for Certificate of Citizenship</a>.</p></br>
      <p><b>Please be aware.</b> Applications for citizenship through parentage are complex and requirements vary widely based on your specific circumstances. This wayfinder is only intended to inform you of specific aspects of the process related to potential DNA testing. For more information about the process generally, click <a href = "https://www.uscis.gov/citizenship/learn-about-citizenship/i-am-the-child-of-a-us-citizen" target = "_blank">here</a>.</p>
      `);
      break;
    case "popupMarriage":
      $("#modalTitle").text("Marriage at time of birth");
      $("#modalBody").html(`<p>Your parents are considered married if they are legally married to each other at the time of the person's conception or birth within 300 days of the end of the marriage.</p>
      `);
      break;
    case "popupBirthMother":
      $("#modalTitle").text("Who is my birth mother?");
      $("#modalBody").html(`<p>-	Your birth mother is the woman who carried and delivered you as a baby. This person may also be referred to your gestational mother. 8 FAM 301.4-1(D)(1).</p>
      `);
        break;
    case "popupGeneticMother":
      $("#modalTitle").text("Who is my genetic mother?");
      $("#modalBody").html(`<p>Your genetic mother is the woman whose egg was used in conception.</p></br><p>Anonymous egg donors <b>cannot</b> transmit U.S. citizenship, even if there is allegedly proof that the donor was a U.S. citizen.</p>
      `);
      break;
    case "popupGeneticFather":
      $("#modalTitle").text("Who is my genetic father?");
      $("#modalBody").html(`<p>Your genetic father is the man whose sperm was used in conception.</p></br><p>Anonymous sperm donors cannot transmit U.S. citizenship, even if a sperm bank claims to have proof that the donor is a U.S. citizen.</p>
      `);
      break;
    case "popupLegalParent":
      $("#modalTitle").text("Who is my legal parent?");
      $("#modalBody").html(`<p>Your legal parents are the people that raised you and are recognized as being your parents in the country in which you were born. Most of the time, your legal parents are those listed on your birth certificate or Consular Report of Birth Abroad.</p></br>
      <p>However, the use of assisted reproductive technology complicates legal parent status. Depending on the location of your birth and the laws of that country, a non-genetic parent may have needed to take some additional steps to ensure that they were recognized as your legal parent. For example, some countries require parents to request a pre-birth order acknowledging their legal responsibilities with the child, while others may require modifications to the birth certificate after the birth.</p>
      `);
      break;
    case "popupClearConvincing":
      $("#modalTitle").text("Higher standard for children born to U.S. citizen fathers out of wedlock.");
      $("#modalBody").html(`<p>-	For children born to U.S. citizen fathers out of wedlock, “clear and convincing evidence” of a blood relationship is required. This is a higher burden than normal and thus increases the odds that DNA testing will be necessary to prove the existence of the relationship.</p>
      `);
      break;
    case "popupSurrogate":
      $("#modalTitle").text("What is a 'surrogate'?");
      $("#modalBody").html(`<p>A woman who gives birth to a child who is not the legal parent of the child at the time of the child’s birth in the location of the birth.</p></br>
     <p>A surrogate’s citizenship is irrelevant to the child’s citizenship analysis. 8 FAM 304.3-1(a).</p>
      `);
      break;
    case "popupGeneticParents":
      $("#modalTitle").text("What is a 'genetic parent'?");
      $("#modalBody").html(`<p>Your genetic father is the man whose sperm was used in conception.</p></br>
      <p>Your genetic mother is the woman whose egg was used in conception.</p>
      `);
    break;
    default:      
      alert("Sorry! There was an error");
      break;
  }
}