class MatrixOutput {
	constructor() {
		this.inputDelStr = document.querySelectorAll('input');
		this.modalUp = document.querySelector('.modalUp');
		this.modalAlert = document.querySelector('.modalAlert');
	}
	// 행렬 생성하기
	createMatrix(outputDescription, matrixOutput, outputArea, matrixRow, matrixColumn) {
		// 행렬 생성 시 조건
		if (matrixRow < 7 && matrixRow > 0 && matrixColumn < 7 && matrixColumn > 0) {
			outputDescription.style.display = 'none';
			outputArea.innerHTML = '';
			for (let i = 0; i < matrixRow; i++) {
				for (let j = 0; j < matrixColumn; j++) {
					outputArea.innerHTML += '<input class="valueArea" type="text" maxlength="3">';
				}
				outputArea.innerHTML += '<br>';
			}
		} else if (matrixRow == '' && matrixColumn == '') {
			matrixOutput[i].removeAttribute('readonly');
		} else {
			this.modalAlert.innerHTML = '1~6까지의 행렬을<br>입력해주세요.';
			this.modalUp.style.display = 'block';
		}
		// 생성한 행렬의 입력 범위 제한
		const valueArea = document.querySelectorAll('.valueArea');
		for (let i = 0; i < valueArea.length; i++) {
			valueArea[i].addEventListener('click', (e) => {
				e.target.value = '0';
			});
			valueArea[i].addEventListener('focus', (e) => {
				e.target.value = '0';
			});
			valueArea[i].addEventListener('keyup', (e) => {
				e.target.value = e.target.value.replace(/[^-,^0-9]/gi, '');
				if (e.keyCode == 8 || e.keyCode == 46) {
					valueArea[i].setAttribute('maxlength', '3');
				} else if (e.keyCode == 109 || e.keyCode == 189) {
					valueArea[i].setAttribute('maxlength', '4');
				}
			});
		}
	}
	// 행렬 랜덤값 생성하기
	inputRandom(outputDescription, matrixOutput, outputArea, matrixRow, matrixColumn) {
		// 행렬 생성 시 조건
		if (matrixRow < 7 && matrixRow > 0 && matrixColumn < 7 && matrixColumn > 0) {
			outputDescription.style.display = 'none';
			outputArea.innerHTML = '';
			for (let i = 0; i < matrixRow; i++) {
				for (let j = 0; j < matrixColumn; j++) {
					let randomValue = Math.floor(Math.random() * (999 - (-999 + 1))) - 999;
					outputArea.innerHTML += '<input class="valueArea" type="text" maxlength="3" value=' + randomValue + '>';
				}
				outputArea.innerHTML += '<br>';
			}
		} else if (matrixRow == '' && matrixColumn == '') {
			matrixOutput[i].removeAttribute('readonly');
		} else {
			this.modalAlert.innerHTML = '1~6까지의 행렬을<br>입력해주세요.';
			this.modalUp.style.display = 'block';
		}
		// 생성한 행렬의 입력 범위 제한
		const valueArea = document.querySelectorAll('.valueArea');
		for (let i = 0; i < valueArea.length; i++) {
			valueArea[i].addEventListener('click', (e) => {
				e.target.value = '0';
			});
			valueArea[i].addEventListener('focus', (e) => {
				e.target.value = '0';
			});
			valueArea[i].addEventListener('keyup', (e) => {
				e.target.value = e.target.value.replace(/[^-,^0-9]/gi, '');
				if (e.keyCode == 8 || e.keyCode == 46) {
					valueArea[i].setAttribute('maxlength', '3');
				} else if (e.keyCode == 109 || e.keyCode == 189) {
					valueArea[i].setAttribute('maxlength', '4');
				}
			});
		}
	}
	// 행렬 초기화
	matrixAReset(outputDescription, outputArea, matrixOutput) {
		outputDescription.style.display = 'block';
		outputArea.innerHTML = '';
		matrixOutput[0].value = '';
		matrixOutput[1].value = '';
	}

	matrixBReset(outputDescription, outputArea, matrixOutput) {
		outputDescription.style.display = 'block';
		outputArea.innerHTML = '';
		matrixOutput[0].value = '';
		matrixOutput[1].value = '';
	}

	matrixAllReset(
		outputDescription1,
		outputDescription2,
		outputDescription3,
		outputArea1,
		outputArea2,
		outputArea3,
		matrixOutput1,
		matrixOutput2
	) {
		outputDescription1.style.display = 'block';
		outputArea1.innerHTML = '';
		matrixOutput1[0].value = '';
		matrixOutput1[1].value = '';
		outputDescription2.style.display = 'block';
		outputArea2.innerHTML = '';
		matrixOutput2[0].value = '';
		matrixOutput2[1].value = '';
		outputDescription3.style.display = 'block';
		outputArea3.innerHTML = '';
	}
}

class MatrixCalculate {
	constructor() {
		this.value = '';
		this.modalUp = document.querySelector('.modalUp');
		this.modalAlert = document.querySelector('.modalAlert');
		this.fontSizeC = document.querySelectorAll('.outputAreaC input');
	}
	// 행렬 A+B
	plusMatrix(
		outputDescription,
		outputAreaC,
		matrixRowA,
		matrixColumnA,
		matrixRowB,
		matrixColumnB,
		matrixValueA,
		matrixValueB
	) {
		// 행렬 A+B 연산 시 조건
		if (matrixRowA == '' && matrixColumnA == '' && matrixRowB == '' && matrixColumnB == '') {
			outputDescription.style.display = 'block';
			outputAreaC.style.display = 'none';
			outputAreaC.innerHTML = '';
		} else if (matrixRowA == matrixRowB && matrixColumnA == matrixColumnB) {
			outputDescription.style.display = 'none';
			outputAreaC.style.display = 'block';
			outputAreaC.innerHTML = '';
			for (let i = 1; i <= matrixColumnA * matrixRowA; i++) {
				this.value = parseInt(matrixValueA[i - 1].value) + parseInt(matrixValueB[i - 1].value);
				if (matrixValueA[i - 1].value == '' || matrixValueB[i - 1].value == '') {
					outputAreaC.style.display = 'none';
					outputDescription.style.display = 'block';
					this.modalAlert.innerHTML = 'A와 B행렬에 빈칸없이<br>모두 입력해주세요.';
					this.modalUp.style.display = 'block';
				}
				if (matrixValueA[i - 1].value == '' && matrixValueB[i - 1].value == '') {
					this.value = '';
				}
				outputAreaC.innerHTML += '<input class="valueArea" readonly value = ' + this.value.toLocaleString('kr') + '>';
				if (i % matrixColumnA == 0) {
					outputAreaC.innerHTML += '<br>';
				}
			}
		} else {
			outputDescription.style.display = 'block';
			outputAreaC.style.display = 'none';
			this.modalAlert.innerHTML = 'A와 B행렬의 행과열이<br>일치해야합니다.';
			this.modalUp.style.display = 'block';
		}
	}
	// 행렬 A-B
	minusMatrix(
		outputDescription,
		outputArea,
		matrixRowA,
		matrixColumnA,
		matrixRowB,
		matrixColumnB,
		matrixValueA,
		matrixValueB
	) {
		// 행렬 A-B 연산 시 조건
		if (matrixRowA == '' && matrixColumnA == '' && matrixRowB == '' && matrixColumnB == '') {
			outputDescription.style.display = 'block';
			outputArea.style.display = 'none';
			outputArea.innerHTML = '';
			outputArea.innerHTML = '';
		} else if (matrixRowA == matrixRowB && matrixColumnA == matrixColumnB) {
			outputDescription.style.display = 'none';
			outputArea.style.display = 'block';
			outputArea.innerHTML = '';
			for (let i = 1; i <= matrixRowA * matrixColumnA; i++) {
				this.value = parseInt(matrixValueA[i - 1].value) - parseInt(matrixValueB[i - 1].value);
				if (matrixValueA[i - 1].value == '' || matrixValueB[i - 1].value == '') {
					outputArea.style.display = 'none';
					outputDescription.style.display = 'block';
					this.modalAlert.innerHTML = 'A와 B행렬에 빈칸없이<br>모두 입력해주세요.';
					this.modalUp.style.display = 'block';
				}
				outputArea.innerHTML += '<input class="valueArea" readonly value = ' + this.value.toLocaleString('kr') + '>';
				if (i % matrixColumnA == 0) {
					outputArea.innerHTML += '<br>';
				}
			}
		} else {
			outputDescription.style.display = 'block';
			outputArea.style.display = 'none';
			this.modalAlert.innerHTML = 'A와 B행렬의 행과열이<br>일치해야합니다.';
			this.modalUp.style.display = 'block';
		}
	}
	// 입력한 행렬 개수에 따른 배열
	arrArea1(inputValue, matrixRow, matrixColumn) {
		const inputArr1 = [];
		const tempValue = [];
		for (let i = 0; i < inputValue.length; i++) {
			tempValue.push(inputValue[i].value);
		}
		for (let i = 0; i < matrixRow; i++) {
			const rowValue = [];
			for (let j = 0; j < matrixColumn; j++) {
				rowValue.push(tempValue.shift());
			}
			inputArr1.push(rowValue);
		}
		return inputArr1;
	}
	// 입력한 행렬 개수에 따른 배열
	arrArea2(inputValue, matrixRow, matrixColumn) {
		const inputArr2 = [];
		const tempValue = [];
		for (let i = 0; i < inputValue.length; i++) {
			tempValue.push(inputValue[i].value);
		}
		for (let i = 0; i < matrixRow; i++) {
			const rowValue = [];
			for (let j = 0; j < matrixColumn; j++) {
				rowValue.push(tempValue.shift());
			}
			inputArr2.push(rowValue);
		}
		return inputArr2;
	}
	// 행렬 A*B
	multiplyMatrix(
		outputDescription,
		outputArea,
		matrixRowA,
		matrixColumnA,
		matrixRowB,
		matrixColumnB,
		inputArr1,
		inputArr2
	) {
		// 행렬 A*B 연산 시 조건
		if (matrixRowA == '' && matrixColumnA == '' && matrixRowB == '' && matrixColumnB == '') {
			outputDescription.style.display = 'block';
			outputArea.style.display = 'none';
			outputArea.innerHTML = '';
		} else if (inputArr1[0].length == inputArr2.length) {
			outputDescription.style.display = 'none';
			outputArea.style.display = 'block';
			outputArea.innerHTML = '';
			const multiplyValue = [];
			for (let i = 0; i < inputArr1.length; i++) {
				const rowValue = [];
				for (let j = 0; j < inputArr2[0].length; j++) {
					let rowCellValue = 0;
					for (let k = 0; k < inputArr2.length; k++) {
						rowCellValue += parseInt(inputArr1[i][k]) * parseInt(inputArr2[k][j]);
						this.value = rowCellValue;
						if (inputArr1[i][k] == '' || inputArr2[k][j] == '') {
							outputArea.style.display = 'none';
							outputDescription.style.display = 'block';
							this.modalAlert.innerHTML = 'A와 B행렬에 빈칸없이<br>모두 입력해주세요.';
							this.modalUp.style.display = 'block';
						}
					}
					outputArea.innerHTML +=
						'<input class="valueArea" style="font-size: 1.5rem; width: 6.5rem; height: 6.5rem;" readonly value=' +
						this.value.toLocaleString('kr') +
						'>';
					rowValue.push(rowCellValue);
				}
				outputArea.innerHTML += '<br>';
				multiplyValue.push(rowValue);
			}
			return multiplyValue;
		} else if (inputArr1[0].length != inputArr2.length) {
			outputDescription.style.display = 'block';
			outputArea.style.display = 'block';
			outputArea.innerHTML = '';
			this.modalAlert.innerHTML = 'A행렬의 열과 B행렬의 행이<br>일치해야합니다.';
			this.modalUp.style.display = 'block';
		}
	}
}

(function main() {
	// A,B 행렬과 Result 행렬 복제
	const MatrixA = new MatrixOutput();
	const MatrixB = new MatrixOutput();
	const CalculateResult = new MatrixCalculate();
	// 생성할 행렬의 입력 범위 제한
	MatrixA.inputDelStr.forEach((v) => {
		v.addEventListener('keyup', () => {
			v.value = v.value.replace(/[^1-6]/, '');
		});
	});
	// 생성할 행렬의 입력 범위 제한
	MatrixB.inputDelStr.forEach((v) => {
		v.addEventListener('keyup', () => {
			v.value = v.value.replace(/[^1-6]/, '');
		});
	});
	// 클릭 시 발생하는 이벤트
	this.addEventListener('click', (e) => {
		// 지역 변수화
		const matrixOutputA = document.querySelectorAll('.matrixOutputA');
		const matrixRowA = matrixOutputA[0].value;
		const matrixColumnA = matrixOutputA[1].value;
		const outputAreaA = document.querySelector('.outputAreaA');
		const matrixOutputB = document.querySelectorAll('.matrixOutputB');
		const matrixRowB = matrixOutputB[0].value;
		const matrixColumnB = matrixOutputB[1].value;
		const outputAreaB = document.querySelector('.outputAreaB');
		const inputValueA = document.querySelectorAll('.outputAreaA input');
		const inputValueB = document.querySelectorAll('.outputAreaB input');
		const outputAreaC = document.querySelector('.outputAreaC');
		const outputDesA = document.querySelector('.outputDesA');
		const outputDesB = document.querySelector('.outputDesB');
		const outputDesC = document.querySelector('.outputDesC');
		const modalUp = document.querySelector('.modalUp');
		const modalAlert = document.querySelector('.modalAlert');
		const buttonBoxA = document.querySelectorAll('.buttonBoxA button span');
		const buttonBoxB = document.querySelectorAll('.buttonBoxB button span');
		const calculateBtn = document.querySelectorAll('.calculateBox button span');

		if (e.target.id == 'outputBtnA') {
			MatrixA.createMatrix(outputDesA, matrixOutputA, outputAreaA, matrixRowA, matrixColumnA);
			buttonBoxA[0].classList.add('active');
			buttonBoxA[1].classList.remove('active');
			matrixOutputA[0].setAttribute('readonly', 'readonly');
			matrixOutputA[1].setAttribute('readonly', 'readonly');
		}
		if (e.target.id == 'outputBtnB') {
			MatrixB.createMatrix(outputDesB, matrixOutputB, outputAreaB, matrixRowB, matrixColumnB);
			buttonBoxB[0].classList.add('active');
			buttonBoxB[1].classList.remove('active');
			matrixOutputB[0].setAttribute('readonly', 'readonly');
			matrixOutputB[1].setAttribute('readonly', 'readonly');
		}
		if (e.target.id == 'outputRandomBtnA') {
			MatrixA.inputRandom(outputDesA, matrixOutputA, outputAreaA, matrixRowA, matrixColumnA);
			buttonBoxA[0].classList.remove('active');
			buttonBoxA[1].classList.add('active');
			matrixOutputA[0].setAttribute('readonly', 'readonly');
			matrixOutputA[1].setAttribute('readonly', 'readonly');
		}
		if (e.target.id == 'outputRandomBtnB') {
			MatrixB.inputRandom(outputDesB, matrixOutputB, outputAreaB, matrixRowB, matrixColumnB);
			buttonBoxB[0].classList.remove('active');
			buttonBoxB[1].classList.add('active');
			matrixOutputB[0].setAttribute('readonly', 'readonly');
			matrixOutputB[1].setAttribute('readonly', 'readonly');
		}
		if (e.target.id == 'resetBtnA') {
			MatrixA.matrixAReset(outputDesA, outputAreaA, matrixOutputA);
			buttonBoxA[0].classList.remove('active');
			buttonBoxA[1].classList.remove('active');
			matrixOutputA[0].removeAttribute('readonly');
			matrixOutputA[1].removeAttribute('readonly');
		}
		if (e.target.id == 'resetBtnB') {
			MatrixB.matrixBReset(outputDesB, outputAreaB, matrixOutputB);
			buttonBoxB[0].classList.remove('active');
			buttonBoxB[1].classList.remove('active');
			matrixOutputB[0].removeAttribute('readonly');
			matrixOutputB[1].removeAttribute('readonly');
		}
		if (e.target.id == 'resetBtnC') {
			MatrixA.matrixAllReset(
				outputDesA,
				outputDesB,
				outputDesC,
				outputAreaA,
				outputAreaB,
				outputAreaC,
				matrixOutputA,
				matrixOutputB
			);
			calculateBtn[0].classList.remove('active');
			calculateBtn[1].classList.remove('active');
			calculateBtn[2].classList.remove('active');
			buttonBoxA[0].classList.remove('active');
			buttonBoxA[1].classList.remove('active');
			buttonBoxB[0].classList.remove('active');
			buttonBoxB[1].classList.remove('active');
			matrixOutputA[0].removeAttribute('readonly');
			matrixOutputA[1].removeAttribute('readonly');
			matrixOutputB[0].removeAttribute('readonly');
			matrixOutputB[1].removeAttribute('readonly');
		}
		if (e.target.id == 'plusBtn') {
			CalculateResult.plusMatrix(
				outputDesC,
				outputAreaC,
				matrixRowA,
				matrixColumnA,
				matrixRowB,
				matrixColumnB,
				inputValueA,
				inputValueB
			);
			calculateBtn[0].classList.add('active');
			calculateBtn[1].classList.remove('active');
			calculateBtn[2].classList.remove('active');
		}
		if (e.target.id == 'minusBtn') {
			CalculateResult.minusMatrix(
				outputDesC,
				outputAreaC,
				matrixRowA,
				matrixColumnA,
				matrixRowB,
				matrixColumnB,
				inputValueA,
				inputValueB
			);
			calculateBtn[0].classList.remove('active');
			calculateBtn[1].classList.add('active');
			calculateBtn[2].classList.remove('active');
		}
		if (e.target.id == 'multiplyBtn') {
			calculateBtn[0].classList.remove('active');
			calculateBtn[1].classList.remove('active');
			calculateBtn[2].classList.add('active');
			CalculateResult.multiplyMatrix(
				outputDesC,
				outputAreaC,
				matrixRowA,
				matrixColumnA,
				matrixRowB,
				matrixColumnB,
				CalculateResult.arrArea1(inputValueA, matrixRowA, matrixColumnA),
				CalculateResult.arrArea2(inputValueB, matrixRowB, matrixColumnB)
			);
		}
		if (e.target.getAttribute('readonly')) {
			modalUp.style.display = 'block';
			modalAlert.innerHTML = '행렬을 새로 생성하려면<br>Reset을 눌러주세요.';
		}
		if (e.target.id == 'closeBtn') {
			modalUp.style.display = 'none';
		}
	});
})();
