window.onload = function() {

        var array = []; // это то же что и:
        var array = new Array();
        console.log(Array);
        console.log(Array.prototype);

        //************************** */
        function Bird() {
            this.canFly = true;
        };
        Bird.prototype.canSing = true;
        var kesha = new Bird();
        console.log(kesha.canSing);
        console.log(Bird.prototype); // Видно что прототип - это СВОЙСТВО ФУНКЦИИ КОНСТРУКТОРА

        //пример 1*********************** */

        function person(first, last, age, eye) {
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.eyeColor = eye;
        }

        var myFather = new person("John", "Doe", 50, "blue");
        var myMother = new person("Sally", "Rally", 48, "green");

        document.getElementById("demo").innerHTML =
            "My father is " + myFather.age + ". My mother is " + myMother.age;

        // функция конструктор . Общий класс.
        //пример 2*********************** */

        class Prodact {
            constructor(name, prise, manufacture) {
                this.name = name;
                this.prise = prise;
                this.manufacture = manufacture;
            }
        }
        //Класс - мягкая игрушка. Наследуется от Prodact.

        class SoftToy extends Prodact {
            constructor(name, prise, manufacture) {
                super(name, prise, manufacture); // вызовет конструктор у родителя
                this.soft = true; // особенность SoftToy
                this.weight = '0.1kg';
            }
            setColor(color) {
                this.colorName = color;
            }
        }
        var misha = new SoftToy('Плюшевый мишка', '150р.', 'China LTD');
        misha.colorName = 'red'; // задали цвет
        console.log(misha);

        //пример 3*********************** */

        function Visitor() {
            this.hasTicket = true;
        };
        var age = parseInt(prompt('Сколько Вам лет?'));
        if (age < 18) {
            Visitor.prototype.viewMovie = function() {
                console.log('Запрещён просмотр фильма!')
            }
        } else {
            Visitor.prototype.viewMovie = function() {
                console.log('Начинай просмотр фильма!')
            }
        };
        var user = new Visitor();
        user.viewMovie();


    } //end