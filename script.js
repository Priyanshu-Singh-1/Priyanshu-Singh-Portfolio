
// Function for Visitor counters - reference - https://youtu.be/WTHrtiMEjk0
// To view the number of visitors without visting webiste  - https://api.countapi.xyz/get/codefoxx.com/9f4e709a-055d-49fd-86aa-dfea7fc636c6

// {"namespace":"codefoxx.com","key":"74c129bb-7312-40a2-b77a-8395fb99e7d5","value":0}
function websiteVisits(response)
{
    document.querySelector("#visits").textContent = response.value;
}