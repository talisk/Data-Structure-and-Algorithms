class CArray {
    constructor(numElements) {
        this.dataStore = [];
        this.pos = 0;
        this.numElements = numElements;
        for (let i = 0; i < this.numElements; i++) {
            this.dataStore[i] = Math.floor(Math.random()* (this.numElements + 1));            
        }
    }
    insert(element) {
        this.dataStore[this.pos++] = element;
    }
    clear() {
        for (let i = 0; i < this.dataStore.length; i++) {
            this.dataStore[i] = 0;            
        }
    }
    toString() {
        let str = '' ,j = 1;
        for (let i = 0; i < this.dataStore.length; i++, j++) {
            this.dataStore[i] >= 10 ? str += `${this.dataStore[i]} ` : str += `${this.dataStore[i]}  `;
            if (j > 0 && j % 10 === 0) str += '\n';
        }
        return str;
    }
    swap(arr, index1, index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    //冒泡排序
    bubbleSort() {
         let len = this.dataStore.length - 1;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i; j++ ) {
                if (this.dataStore[j] > this.dataStore[j+1]) {
                    this.swap(this.dataStore, j, j+1);
                }
            }
        }
    }
    //选择排序
    selectionSort() {
        let minIndex = 0, temp, arr = this.dataStore, len = arr.length;
        for (let i = 0; i < len - 1; i++) {
            minIndex = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIndex]) minIndex = j;
            }
            this.swap(arr, minIndex, j);
        }
    }
    //插入排序
    insertionSort() {
        let arr = this.dataStore, len = arr.length, temp, j;
        for (let i = 1; i < len; i++) {
            temp = arr[i];
            j = i;
            while (j > 0 && arr[j - 1] > temp) {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = temp;
        }
    }
    //希尔排序
    shellSort() {
        let arr = this.dataStore, gap = 1, len = arr.length, temp;
        while (gap < len / 3) {
            gap = gap * 3 + 1;
        }
        for (gap; gap > 0; gap = Math.floor(gap / 3)) {
            for (let i = gap; i < len; i++) {
                temp = arr[i];
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                    arr[j] = arr[j - gap];
                }
                arr[j] = temp;
            }
        }
    }
    //快速排序
    qSort(arr) {
        let len = arr.length,
            pivot = arr[0],
            lesser = [],
            greater = [];
        if (len === 0) return [];
        for (let i = 1; i < len; i++) {
            if (arr[i] < pivot) {
                lesser.push(arr[i]);
            } else {
                greater.push(arr[i]);
            }
        }
        return this.qSort(lesser).concat(pivot, this.qSort(greater));
    }
}