const $ = (name) => document.querySelector(name);

const inputName = $("#input-name");
const btnCreate = $("#btn-create");
const tbody = $("#tbody");

const dataC = {};

inputName.onkeyup = function (event) {
  dataC.name = event.target.value;
};

async function getCategories() {
  try {
    const result = await get("/category");
    result.forEach((category) => renderRow(category));
  } catch (error) {
    console.log(error);
    console.log("error");
  }
}

getCategories();

btnCreate.onclick = async function () {
  try {
    const result = await post("/category", dataC);
    inputName.value = "";
    renderRow(result);
  } catch (error) {
    console.log(error);
  }
};

function renderRow(category) {
  tbody.innerHTML += `
        <tr>
          <td>${category.id}</td>
          <td>${category.name}</td>
        </tr>
      `;
}

/////////////////////////////////////////


const inputNameProduct = $("#input-name-p");
const inputPrice = $("#input-price-p");
const inputImageURL = $("#input-url-image");
const inputDiscount = $("#input-discount");
const inputCategory = $("#input-category");
const btnCreateProduct = $("#btn-create-p");
const tbodyProduct = $("#tbody-p");

const dataProduct = {};

inputNameProduct.onkeyup = function (event) {
  dataProduct.name = event.target.value;
};

inputPrice.onkeyup = function (event) {
    dataProduct.price = Number(event.target.value);
  };
inputImageURL.onkeyup = function (event) {
  dataProduct.url_image = event.target.value;
};
inputDiscount.onkeyup = function (event) {
    dataProduct.discount = Number(event.target.value);
  };
inputCategory.onkeyup = function (event) {
    dataProduct.category = Number(event.target.value);
  };

async function getProducts() {
  try {
    const result = await get("/product");
    result.forEach((product) => renderRowProduct(product));
  } catch (error) {
    console.log(error);
  }
}

getProducts();

btnCreateProduct.onclick = async function () {
  try {
    const result = await post("/product", dataProduct);
    inputNameProduct.value = "";
    inputPrice.value = "";
    inputImageURL.value = "";
    inputDiscount.value = "";
    inputCategory.value = "";
    renderRowProduct(result);
  } catch (error) {
    console.log(error);
  }
};

function renderRowProduct(product) {
    tbodyProduct.innerHTML += `
          <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <img src=${product.url_image} width="100px">
            
            </td>
            <td>${product.discount}</td>
            <td>${product.category}</td>
          </tr>
        `;
  }