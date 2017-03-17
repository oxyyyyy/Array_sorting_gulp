var array = [];
var column_number;

// Функция приясваивания высоты колонкам
function giveHeight(i) {
    $("#column_" + i).css({
        height: array[i]
    });
};

// Сгенерировать массив
$("#create_btn").click(function() {

    var numberInputValue = $("#number_input").val();

    if (numberInputValue == "") {
        $("#create_btn").html("Type the value!");
        $("#create_btn").removeClass("btn-primary");
        $("#create_btn").addClass("btn-danger");
    } else if (numberInputValue <= 0) {
        $("#create_btn").html("Wrong value!");
        $("#create_btn").removeClass("btn-primary");
        $("#create_btn").addClass("btn-danger");
    } else {
        $("#create_btn").html("Create array!");
        $("#create_btn").removeClass("btn-danger");
        $("#create_btn").addClass("btn-primary");
        // Очищаем список
        $('.column').remove();
        // Получаем значения пользователя
        column_number = $("#number_input").val();

        // Создаем liшки, даём им класс column
        for (var i = 0; i < column_number; i++) {
            var li = document.createElement('li');
            document.getElementById('graph_id').appendChild(li);
            $('li').addClass('column');
        };

        // Присваевание айдишников
        $('.column').each(function(i) {
            $(this).attr('id', 'column_' + i);
        });

        // Генерируем рандомные значения столбиков и даём им высоту
        for (var i = 0; i < column_number; i++) {
            array[i] = Math.floor((Math.random() * 600) + 1);
            giveHeight(i);
        };
    };

});

// Сортировать массив
$("#sort_btn").click(function() {

    function compareNumeric(a, b) {
        return a - b;
    };

    array.sort(compareNumeric);

    for (var i = 0; i < column_number; i++) {
        giveHeight(i);
    }

});
