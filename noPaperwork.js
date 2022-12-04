var tree = "JSONtrees/noPaperwork.json";
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
      $("#modalBody").html(`<p>  Since you qualify for an exemption, you should not be required to provide a DNA sample.</p><br><p> There are many free or low-cost immigration services available for migrants in need of legal advice. The Immigration Advocacy Network's <a href= "https://www.immigrationadvocates.org/legaldirectory/" target = "_blank"><b>National Immigration Legal Services Directory</b></a> is an excellent resource for identifying and contact legal aid organizations. </p>
     `);
      break;
    case "popup3":
      $("#modalTitle").text("Seek legal advice");
      $("#modalBody").html(`<p>There are many free or low-cost immigration services available for migrants in need of legal advice. The Immigration Advocacy Network's <a href= "https://www.immigrationadvocates.org/legaldirectory/" target = "_blank"><b>National Immigration Legal Services Directory</b></a> is an excellent resource for identifying and contact legal aid organizations.</p>
      `);
      break;
    case "popup4":
      $("#modalTitle").text("Federal database");
      $("#modalBody").html(`<p> Your DNA profile will be stored in the Federal Bureau of Investigation’s <a href= "https://www.fbi.gov/services/laboratory/biometric-analysis/codis/codis-and-ndis-fact-sheet#:~:text=CODIS%20is%20the%20acronym%20for,used%20to%20run%20these%20databases." target = "_blank">Combined DNA Index System</a> (CODIS). Law enforcement agencies around the country compare DNA samples collected at crime scenes to the profiles contained CODIS to aid in their search for the perpetrator. </p>
      `);
      break;
    case "popup5":
      $("#modalTitle").text("Criminal Charges");
      $("#modalBody").html(`<p> According to <a href= "https://www.law.cornell.edu/uscode/text/34/40702" target = "_blank">34 U.S.C. § 40702(a)(5)</a>, failure to cooperate in the collection of a DNA sample is a class A misdemeanor under federal law, punishable by up to a year in jail. </p>
      `);
      break;
    case "popup6":
        $("#modalTitle").text("DNA Profile");
        $("#modalBody").html(`<p> A DNA profile identifies a handful of specific genetic markers from your DNA. These markers can be compared to markers in the same location in other DNA profiles to determine if a genetic match exist between the two. </p>
        `);
        break;
    case "popup7":
          $("#modalTitle").text("Seeking legal aid");
          $("#modalBody").html(`<p> Immigration officials should not attempt to collect DNA from you once you have been released from custody. If they do, you should refused to provide a sample and seek legal aid as soon as possible. </p><br><p> There are many free or low-cost immigration services available for migrants in need of legal advice. The Immigration Advocacy Network's <a href= "https://www.immigrationadvocates.org/legaldirectory/" target = "_blank"><b>National Immigration Legal Services Directory</b></a> is an excellent resource for identifying and contact legal aid organizations. </p>
         `);
          break;
    case "popup8":
          $("#modalTitle").text("Summary(?)");
          $("#modalBody").html(`<p>If you have been detained after crossing the border without documentation, you will likely be asked to provide a DNA sample.</p><br>
          <h6><b>Who can collect my DNA sample?</b></h6>
          <p>Any federal agency can collect your DNA sample, including Immigration and Customs Enforcement (ICE). However, the primary responsibility falls upon Customs and Border Protection (CBP). </p><br>
          <h6><b>Can I refuse to provide a DNA sample?</b></h6>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You should not refuse to provide a DNA sample. Failure to do so may result in a class A misdemeanor and officers are authorized to use force to collect a DNA sample.</p><br>
          <h6><b>Where is my DNA profile stored?</b></h6>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your DNA profile will be stored in the Federal Bureau of Investigation’s Combined DNA Index System (CODIS). Law enforcement agencies around the country compare DNA samples collected at crime scenes to the profiles contained CODIS to aid in their search for the perpetrator.</p><br>
          <h6><b>Can I get my information removed from CODIS?</b></h6>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unfortunately, your DNA profile will remain in CODIS forever. Currently, there is no way to have the information removed from CODIS.  </p>
          `);
          break;
    default:
      alert("Sorry! There was an error");
      break;
  }
}