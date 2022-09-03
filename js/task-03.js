const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector("ul.gallery");
console.log(list);
const element1 = document.createElement("li");
const image1 = document.createElement("img");
element1.append(image1);
const image1Link = images[0];
image1.src = image1Link.url

const element2 = document.createElement("li");
const image2 = document.createElement("img");
element2.append(image2);
const image2Link = images[1];
image2.src = image2Link.url

const element3 = document.createElement("li");
const image3 = document.createElement("img");
element3.append(image3);
const image3Link = images[2];
image3.src = image3Link.url

list.append(element1, element2, element3);