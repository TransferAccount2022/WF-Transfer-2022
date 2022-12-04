var tree = "JSONtrees/familyVisaApp.json";
var levels = 9;
treeHeight = 1000;


function fillModal(id) {
  switch(id) {
    case "popupApplication":
     $("#modalTitle").text("Initiating the Application Process");
     $("#modalBody").html(`<p>Individuals seeking a family-based visa should work closely with their U.S. based family members to complete the DNA testing process. U.S. based family members are required to start the DNA collection process, the process cannot be initiated by individuals abroad. For more information on the role of U.S. based family members, click <a href="./familyVisaPet.html">here</a>.</p> <br>
     <p> Please note that DNA collection and testing is only a portion of the application process for family-based visas. Evidence of a confirmed relationship does not guarantee issuance of a visa. For more information on the entire application process, click <a href="https://travel.state.gov/content/travel/en/us-visas/immigrate/family-immigration.html" target="_blank"> here</a>.</p>
     `);
      break;
    case "popupEmbassy":
      $("#modalTitle").text("U.S. Embassy and Consulate");
     $("#modalBody").html(`<p>DNA collection should occur at the U.S. Embassy or Consulate where the visa application is pending. Find the nearest U.S. Embassy or Consulate <a href= "https://www.usembassy.gov/" target = "_blank">here</a>.</p>
     `);
      break;
    case "popupFees":
      $("#modalTitle").text("Fees");
      $("#modalBody").html(`<p> To schedule an appointment, you should contact the Embassy or Consulate's panel physician. Routine medical examinations, conducted by panel physicians, are mandatory for all visa applicants (<a href="https://www.law.cornell.edu/cfr/text/22/42.66">22 CFR § 42.66</a>) and the Consulate or Embassy should provide you with a list of approved doctors. You may be required to pay a DNA collection fee.</p>
      `);
      break;
    case "popupCollection":
      $("#modalTitle").text("Sample Collection Process (Abroad)");
      $("#modalBody").html(`<p>In order to have a DNA sample collected abroad, it is important to make sure that applicants come prepared to their scheduled collection appointment. Applicants must bring with them the following records:</p>
      <ul>
      <li>Their passport</li>
      <li>A photo of themselves</li>
      <li>A receipt showing payment of fees associated with DNA collection</li>
      </ul>
      <p>A designated physician and/or medical technician will collect the sample and securely send it back to the AABB lab in the United States.<br><br>
      If an applicant is a child, they must be accompanied by a parent or legal guardian. If neither parent is present, the guardian must present a Power of Attorney document from the parent residing in the United States.
       </p>
      `);
      break;
      case "popupNeg":
        $("#modalTitle").text("What happens after negative test result?");
        $("#modalBody").html(`<p> A negative test result will likely warrant rejection of your visa application.</p><br> <p> You may acquire a copy of your DNA test results by contacting the AABB-approved laboratory that conducted the testing.</p></br><p> If you believe that your visa application was rejected due to innaccurate DNA test results, you may appeal the decision. For more information on how to file an appeal, click <a href="https://www.uscis.gov/eoir-29" target="_blank">here</a>. </p>
        `);
        break;
      case "popupPos":
        $("#modalTitle").text("What next after a positive test result?");
        $("#modalBody").html(`<p> The application process continues. However, a positive test result <b> does not </b> guarantee that a visa will be granted.</p><br> <p>You may acquire a copy of your DNA test results by contacting the AABB-approved laboratory that conducted the testing. </p>
        `);
        break;
    case "popup5":
      $("#modalTitle").text("Family Member Resources");
      $("#modalBody").html(`<p><a href="https://www.law.cornell.edu/uscode/text/8/1325" target="_blank">§1325</a> | Improper Entry, civil offense &amp; misdemeanor</p>
      <p><a href="https://www.law.cornell.edu/uscode/text/8/1326" target="_blank">§1326</a> | Reentry of removed aliens; aggravated felony</p>
      <p><a href="https://www.law.cornell.edu/uscode/text/8/1357" target="_blank">§1357</a> | Immigration Powers: Immigration authorities have broad power to search persons and
      property</p>
      <p><a href="https://www.law.cornell.edu/uscode/text/8/1182" target="_blank">§1182</a> | Conditions for inadmissibility</p>
      <p><a href="https://www.law.cornell.edu/uscode/text/8/1225" target="_blank">§1225</a> | Inspection by immigration officers; expedited removal of inadmissible arriving aliens;
      referral for hearing</p>
      <p><a href="https://www.law.cornell.edu/uscode/text/8/1227" target="_blank">§1227</a> | Classes of deportable aliens</p>
       <a href="https://www.law.cornell.edu/uscode/text/8/1229" target="_blank">8 USC §1229</a> | Initiation of removal proceedings</p>`);
      break;
    case "popupDNA":
        $("#modalTitle").text("DNA samples");
        $("#modalBody").html(`<p> A DNA sample is generally collected via buccal swab - taking saliva from the mouth. Blood draws may also be approved in certain situations. <a href="https://www.law.cornell.edu/cfr/text/28/28.12" target="_blanK">28 CFR 28.12(f)(1)</a></p>
        `);
        break;
    case "popupProfile":
          $("#modalTitle").text("DNA Profile");
          $("#modalBody").html(`<p> A DNA profile identifies a handful of specific genetic markers from your DNA. These markers can be compared to markers in the same location in other DNA profiles to determine if a genetic match exist between the two. </p>
          `);
          break;
    case "popupCircumstances":
          $("#modalTitle").text("Optional DNA testing");
          $("#modalBody").html(`<p> DNA testing is entirely optional. Under no circumstances can the government <i>require</i> you to provide a DNA sample in order to receive a family based visa.</p> <br> <p> However, if you are otherwise unable to provide credible evidence of your relationship, you may have no choice but to withdraw your appliation or submit to DNA testing. </p>
          `);
          break;
    case "popupRelative":
            $("#modalTitle").text("Family Members Eligible for DNA Testing");
            $("#modalBody").html(`<p> DNA testing can only be used to prove the existence of relationships between a parent and child or two siblings. <a href="https://fam.state.gov/fam/09FAM/09FAM060111.html" target="_blank">9 FAM 601.11</a> Proof of genetic relationship between more distant relatives, such as cousins, aunt/uncle and niece/nephew, can only be used as supporting evidence to improve the accuracy of other, more direct tests. </p>
            `);
            break;
    case "popupProof":
            $("#modalTitle").text("Other Forms of Proof Besides DNA Testing");
            $("#modalBody").html(`<p> DNA testing should only be used if there is a lack of sufficient alternative evidence of the genetic relationship. Alternative proof may include a birth certificate or other such documentation and varies based on the specifics of your circumstance. For more on supporting documentation, click <a href="https://www.uscis.gov/family/family-of-us-citizens/bringing-children-sons-and-daughters-to-live-in-the-united-states-as-permanent-residents" target="_blank">here</a>.</p>
            `);
            break;
    case "popupMatch":
            $("#modalTitle").text("What is a 'match'?");
            $("#modalBody").html(`<p> For the purposes of confirming a genetic relationship, the DNA tests must provide a specific degree of certainty in order to be considered sufficient to support the existance of a relationship. <a href="https://fam.state.gov/fam/09FAM/09FAM060111.html" target="_blank">9 FAM 601.11</a> In parent-child relationships, the results must show a 99.5% of certainty or greater to be considered sufficient.</p> </br><p> Sibling-sibling tests must exceed 90% certainty to be considered "probative" evidence, but only if there is less than a 9% match is the test considered proof that a relationship <i>does not</i> exist. </p>
            `);
              break;
    default:
      alert("Something went wrong!");
      break;
  }
}