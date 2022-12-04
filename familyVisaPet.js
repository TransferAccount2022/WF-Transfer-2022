var tree = "JSONtrees/familyVisaPet.json";
var levels = 9;
treeHeight = 850;


function fillModal(id) {
  switch(id) {
    case "popupFamilyVisa":
     $("#modalTitle").text("Family Based Visa");
     $("#modalBody").html(`<p>Family Based Visas are for individuals who have an immediate relative living in the United States as either a U.S. citizen or Lawful Permanent Resident. Citizens can file immigreant visa petitions for their spouses, children, parents and siblings. Lawful Permanent Residents can only file a petition for their spouse or unmarried child.</p><br>
      <p>For more information on how to apply for Family Based Visas, click <a href="https://travel.state.gov/content/travel/en/us-visas/immigrate/family-immigration.html" target="_blank">here</a>.</p>
     `);
      break;
    case "popupLab":
      $("#modalTitle").text("AABB-Accredited Laboratories");
     $("#modalBody").html(`<p>DNA collection must be completed at a laboratory accredited by the AABB. For a list of AABB-accredited laboratories, click <a href ="https://www.aabb.org/standards-accreditation/accreditation/accredited-facilities/aabb-accredited-relationship-testing-facilities" targer = "_blank">here</a>.</p>
     `);
      break;
    case "popupLabProcess":
      $("#modalTitle").text("Lab Collection Process");
      $("#modalBody").html(`<p> [Insert more information regarding collection process at AABB-accredited lab. Including requirements for postage, etc.]</p>
      `);
      break;
    case "popupDNACollection":
      $("#modalTitle").text("DNA Collection Abroad");
      $("#modalBody").html(`<p>The visa applicant will need to have their DNA collected at a U.S. Embassy or Consulate Abroad. Find the nearest U.S. Embassy or Consulate <a href= "https://www.usembassy.gov/" target = "_blank">here</a>.</p> <br> <p> <a href="./familyVisaApp.html" target = "_blank">More information on applicant collection process.</a></p>`);
      break;
      case "popupNeg":
        $("#modalTitle").text("What happens after negative test result?");
        $("#modalBody").html(`<p> A negative test result will likely warrant rejection of your visa application.</p> <br><p> You may acquire a copy of your DNA test results by contacting the AABB-approved laboratory that conducted the testing. Visa application rejects are generally not appealable, but you may be able to seek review from the Board of Immigration Appeals if you believe that the decision was made in error based on inaccurate DNA test results.</p>
        `);
        break;
      case "popupPos":
        $("#modalTitle").text("What next after a positive test result?");
        $("#modalBody").html(`<p>The application process continues. However, a positive test result <b> does not </b> guarantee that a visa will be granted.</p><br> <p>You may acquire a copy of your DNA test results by contacting the AABB-approved laboratory that conducted the testing. </p>
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
      case "popupDNAprofile":
        $("#modalTitle").text("What is a DNA profile?");
        $("#modalBody").html(`<p> A DNA profile identifies a handful of specific genetic markers from your DNA. These markers can be compared to markers in the same location in other DNA profiles to determine if a genetic match exists. </p> <br>
        `);
        break;
      case "popupSample":
          $("#modalTitle").text("DNA samples");
          $("#modalBody").html(`<p> A DNA sample is generally collected via buccal swab - taking saliva from the mouth. Blood draws may also be approved in certain situations. <a href="https://www.law.cornell.edu/cfr/text/28/28.12" target="_blanK">28 CFR 28.12(f)(1)</a> </p>
          `);
          break;
      case "popupMatch":
        $("#modalTitle").text("What is a 'match'?");
        $("#modalBody").html(`<p> <p> For the purposes of confirming a genetic relationship, the DNA tests must provide a specific degree of certainty in order to be considered sufficient to support the existance of a relationship. <a href="https://fam.state.gov/fam/09FAM/09FAM060111.html" target="_blank">9 FAM 601.11</a> In parent-child relationships, the results must show a 99.5% of certainty or greater to be considered sufficient.</p> </br><p> Sibling-sibling tests must exceed 90% certainty to be considered "probative" evidence, but only if there is less than a 9% match is the test considered proof that a relationship <i>does not</i> exist. </p>
        `);
        break;
    default:
      alert("something went wrong");
      break;
  }
}