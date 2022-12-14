var tree = "JSONtrees/CRBAv2Tree.json";
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
    default:
      alert("Sorry! There was an error");
      break;
  }
}