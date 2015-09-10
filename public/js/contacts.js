"use strict";

(function() {
    var app = angular.module("contacts", []);

    app.controller("ContactsController", ['$scope', function($scope) {
        $scope.contacts = [ 
        { 
            name: 'Bob', 
            email: 'bob@mail.com',
            phone: '123-123-1234'
        }, 
        { 
            name: 'Sarah', 
            email: 'sarah@mail.com',
            phone: '123-123-1234'
        }, 
        { 
            name: 'Joe', 
            email: 'joe@mail.com',
            phone: '123-123-1234'
        }, 
        { 
            name: 'Mary', 
            email: 'mary@mail.com',
            phone: '123-123-1234'
        }, 
        ];
        $scope.newContact = {};
        $scope.addContact = function(){
            $scope.contacts.push($scope.newContact);
            $scope.newContact = {};
        };
        $scope.removeContact = function($index){
            console.log($scope.contacts[$index].name);
            $scope.contacts.splice($index, 1);
            console.log($index);
        };
        $scope.select = function ($index) {
            $scope.selectedContact = $index;
            console.log($scope.selectedContact);
        }
        $scope.updateContact = {};
        $scope.editContact = function(){
            $scope.contacts[$scope.selectedContact] = $scope.updateContact;
            $scope.updateContact = {};
        };
    }]);
})();