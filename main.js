// Variables
// let apiKeyBackup (NEWSAPI) = "f105bed2b9ad4a5fb83285b20d550f51";
// let apiKey (NEWSAPI) = "e9894dd20da64f819ad066e2422fc645";
let apiKey = "cf918e638984a0712c917ff5202f5550";
let source = 'the-times-of-india';

// Getting Elements
let newsAccordion = document.getElementById('newsAccordion');

// Creating Ajax GET Request
const xhr = new XMLHttpRequest();
// Getting requestion URL
// xhr.open('GET', `https://newsapi.org/v2/top-headlines/?sources=${source}&apiKey=${apiKey}`, true);
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?lang=en&token=${apiKey}`)
// When response ready
xhr.onload = function () {
	if (this.status === 200) {
		let json = JSON.parse(this.responseText);
		let articles = json.articles;
		// console.log(articles);
		// To get title and contene of each article
		let newsHtml = '';
		articles.forEach(function (element, index) {

			let news = `
					<div class="my-3 mb-3 p-2 card bg-dark text-white rounded">
						<div class="card-header" id="heading${index}">
							<h5 class="mb-0">
								<button class="text-warning btn bg-dark btn-warning" type="button" data-toggle="collapse"
									data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
									<b>News ${index+1}: </b>${element["title"]}
								</button>
							</h5>
						</div>
						<div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
							<div class="card-body"> ${element["content"]}. <a target="_blank" class="text-warning" href="${element["url"]}">Read More Here</a> </div>
						</div>
					</div>`

			newsHtml += news;
		});
		newsAccordion.innerHTML = newsHtml;
	}
	else {
		console.log("Some error occured")
	}
}
// sending request
xhr.send();
