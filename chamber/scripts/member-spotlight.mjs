import utils from "./utils.mjs";


class MemberSpotlight {
    async renderMemberSpotlight() {
        const companiesWrapper = utils.qs('.companies-wrapper');
        const randomCompanies = await this.#getRandomCompanies();
        randomCompanies.forEach((company) => {
            const companyArticle = this.#renderCompany(company);
            companiesWrapper.appendChild(companyArticle);
        })

    }
    #renderCompany(company) {
        const article = document.createElement('article');
        const companyLogo = document.createElement('img');
        companyLogo.src = company.image;
        companyLogo.alt = `${company.name} logo`;
        companyLogo.classList.add('logo');
        article.appendChild(companyLogo);
        const companyText = document.createElement('p');
        companyText.innerHTML = `
            <span class="large-text">${company.name}</span> <br>
            ${company.address.street} <br>
            ${company.address.city}, ${company.address.state} ${company.address.zip} <br>
            ${company.phone} <br>
            <a href="${company.website}">Company Website</a> <br>
            Member Level: ${company.membershipLevel}
        `;
        article.appendChild(companyText);
        return article;
    }
    async #getRandomCompanies() {
        const companies = await this.#loadMembers();
        const upperLevelMembers = this.#parseGoldAndSilver(companies);
        return this.#shuffleCompanies(upperLevelMembers);
    }
    async #loadMembers() {
        const response = await fetch('companies.json');
        const data = await response.json();
        return data;
    }

    #parseGoldAndSilver(companies) {
        return companies.filter((company) => company.membershipLevel !== 'Bronze');
    }

    #shuffleCompanies(companies, numItems = 3) {
        const shuffeledCompanies = utils.shuffleArray([...companies]);
        return shuffeledCompanies.slice(0, numItems);
    }
}

export default MemberSpotlight;