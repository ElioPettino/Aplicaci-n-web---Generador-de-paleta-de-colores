const palleteContainer = document.getElementById('palleteContainer');
/*Valores que vamos a seleccionar aleatoriamente para crear valores hexadecimales*/
const colorValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
/*Cantidad de colores que va a tener nuestra paleta. Se puede modificar*/
const PALLETE_SIZE = 5;

/*Función para crear paleta de colores*/
const createPallete = () =>
{
	for (let i = 0; i < PALLETE_SIZE; i++) 
	{
		/*Se cambia el pallete.Element por un div en HTML:*/
		const palleteElement = document.createElement('div');
		palleteElement.classList.add('palleteItem');
		/*Se agrega el elemento al container:*/
		palleteContainer.appendChild(palleteElement);
	}
	/*llamamos a función que generara los colores:*/
	updatePallete();
}

const colorize = (element) =>
{
	let color = '#';
	for(let i = 0; i<6; i++)
	{
		const randomElement = colorValues[Math.floor(Math.random() * colorValues.length)];
		color += randomElement;
	};
	element.style.backgroundColor = color;
	element.innerHTML = `<span class='colorHex'>${color}</span>`;
}

const updatePallete = () =>
{
	for (let i=0; i<palleteContainer.children.length; i++)
	{
		colorize(palleteContainer.children[i]);
	}
}

createPallete();