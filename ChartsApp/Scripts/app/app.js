var chartApp = angular.module('chartApp', ['ng-fusioncharts']);

chartApp.controller('chartCtrl', function ($scope) {
    $scope.isShowSb = false;
    $scope.editMode = false;
    $scope.value = "";
    $scope.label = "";
    var editItemIndex;
    $scope.chartTypes = [
        "column2d",
        "column3d",
        "line",
        "area2d",
        "bar2d",
        "bar3d",
        "pie2d",
        "pie3d",
        "doughnut2d",
        "doughnut3d",
        "pareto2d",
        "pareto3d"
    ];

    $scope.type = $scope.chartTypes[0];    

    $scope.onSubmit = function () {
        if ($scope.editMode) {
            $scope.dataSource.data[editItemIndex].label = $scope.label;
            $scope.dataSource.data[editItemIndex].value = $scope.value;            
        } else {
            var item = {
                label: $scope.label,
                value: $scope.value
            };
            $scope.dataSource.data.push(item);
        }
        $scope.onClear();
    }

    $scope.onClear = function () {
        $scope.value = "";
        $scope.label = "";
        $scope.editMode = false;
    }
    $scope.onEdit = function (index) {
        $scope.value = $scope.dataSource.data[index].value;
        $scope.label = $scope.dataSource.data[index].label;
        editItemIndex = index;
        $scope.editMode = true;
    }

    $scope.onDelete = function () {
        $scope.dataSource.data.splice(editItemIndex, 1);
        $scope.onClear();
    }

    $scope.dataSource = {
        chart: {
            baseFontSize: 16,
            plotSpacePercent: 10,
            bgAlpha: 95,
            canvasBgAlpha: 0,
            showValues: 0,
            paletteColors: "#6495ED, #FF6347, #90EE90, #FFD700, #FF1493",
            theme: "zune"
        },
        data: [{
            label: "CornflowerBlue",
            value: 42
        }, {
            label: "Tomato",
            value: 81
        }, {
            label: "LightGreen",
            value: 73
        }, {
            label: "Gold",
            value: 62
        }, {
            label: "DeepPink",
            value: 89
        }]
    };
});