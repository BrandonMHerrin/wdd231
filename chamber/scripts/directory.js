let companies = [];
const gridButton = document.querySelector("#select-grid");
const listButton = document.querySelector("#select-list");
const directoryGrid = document.querySelector(".directory-grid");
const directoryList = document.querySelector(".dirctory-list");

async function app() {
  try {
    companies = await getCompanies();
    registerEventListeners();
    // buildCompanyGrid(companies);
    // buildCompanyList(companies);
    openGrid();
  } catch (error) {
    console.error(error);
  }
}

async function getCompanies() {
    console.log('Pulling companies...')
    const response = await fetch("companies.json");
    companies = await response.json();
    console.log(`Pulled ${companies.length} companies`);
    return companies;
}

function buildCompanyGrid() {
    const companyGrid = document.querySelector('.directory-grid');
    companies.forEach((company) => {
        const companyArticle = buildCompanyCard(company);
        companyGrid.appendChild(companyArticle);
    })
}

function buildCompanyList() {
    const companyList = document.querySelector(".dirctory-list");
    const companyTable = buildCompanyTable();
    const tbody = companyTable.querySelector('tbody');
    companies.forEach((company) => {
        const row = buildCompanyRow(company);
        tbody.appendChild(row);
    })
    companyTable.appendChild(tbody);
    companyList.appendChild(companyTable);
}

function buildCompanyTable() {
    const companyTable = document.createElement('table')
    companyTable.innerHTML = `
        <thead>
            <tr>
                <th class="sm">Name</th>
                <th class="lg">Address</th>
                <th class="lg">Phone</th>
                <th class="sm">Website</th>
                <th class="md">Member Level</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;
    return companyTable
}

function buildCompanyRow(company) {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
        <td class="sm">${company.name}</td>
        <td class="lg">
            <p>
                ${company.address.street}<br>
                ${company.address.city}, ${company.address.state} ${company.address.zip}
            </p>
        </td>
        <td class="lg">${company.phone}</td>
        <td class="sm"><a href="${company.website}">Website</a></td>
        <td class="md">${company.membershipLevel}</td>
    `;
    return tableRow;
}

function buildCompanyCard(company) {
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

function registerEventListeners() {
    gridButton.addEventListener('click', () => openGrid());
    listButton.addEventListener('click', () => openList());
}

function openGrid() {
    console.log('Opening grid..');
    clearList();
    buildCompanyGrid();
    listButton.classList.remove('active');
    directoryList.classList.remove('open');
    setTimeout(() => {
        gridButton.classList.add('active');
        directoryGrid.classList.add('open');
    }, 100)
    console.log('Grid opened.');
}
function openList() {
    console.log('Opening list...');
    clearGrid();
    buildCompanyList();
    gridButton.classList.remove('active');
    directoryGrid.classList.remove('open');
    setTimeout(() => {
        listButton.classList.add('active');
        directoryList.classList.add('open');
    }, 100)
    console.log('List opened.');
}

function clearGrid() {
    directoryGrid.innerHTML = '';
}

function clearList() {
    directoryList.innerHTML = '';
}

app();