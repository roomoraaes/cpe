﻿'use strict';

app.factory('patrimonioService', function($ionicPopup,ngAuthSettings, $http, $q){

	var factoryPopup = {};
    var serviceBase = ngAuthSettings.apiServiceBaseUri;	

	var _getTipoPatrimonio  = function(){
        var deferred = $q.defer();
        $http.get(serviceBase + 'Patrimonio/ListarTipoPatrimonio', { withCredentials : true, headers: { 'Content-Type': 'application/json; charset=utf-8' } }).success(function(response){
            deferred.resolve(response);
        }).error(function(err){
            deferred.reject(err);
        });
        return deferred.promise;            
     };

	var _getFornecedoresPatrimonio  = function(){
        var deferred = $q.defer();
        $http.get(serviceBase + 'Patrimonio/ListarFornecedorPatrimonio', { withCredentials : true, headers: { 'Content-Type': 'application/json; charset=utf-8' } }).success(function(response){
            deferred.resolve(response);
        }).error(function(err){
            deferred.reject(err);
        });
        return deferred.promise;            
     };

	var _checkExistePatrimonio  = function(numerodePatrimonio){
        var deferred = $q.defer();
        var data = {
        	numerodePatrimonio : numerodePatrimonio
        };

        $http.post(serviceBase + 'Patrimonio/ExistePatrimonio', data ,  { withCredentials : true, headers: { 'Content-Type': 'application/json; charset=utf-8' } }).success(function(response){
            deferred.resolve(response);
        }).error(function(err){
            deferred.reject(err);
        });
        return deferred.promise;            
     };

    var _obterUltimoNumero  = function(){
        var deferred = $q.defer();

        $http.post(serviceBase + 'Patrimonio/ObterUltimoNumeroPatrimonio', { withCredentials : true, headers: { 'Content-Type': 'application/json; charset=utf-8' } }).success(function(response){
            deferred.resolve(response);
        }).error(function(err){
            deferred.reject(err);
        });
        return deferred.promise;            
     };     

	var _salvaPatrimonio  = function(patrimonio){
        var deferred = $q.defer();
        var data = "codigoTipoPatrimonio=" + patrimonio.CodigoTipoPatrimonio + "&codigoSerial="+patrimonio.codigoSerial + "&codigoNumeroPatrimonio=" + patrimonio.codigoNumeroPatrimonio+ "&descricaoJustificativa" + patrimonio.descricaoJustificativa+ "&numeroNotaFiscal=" + patrimonio.numeroNotaFiscal+ "&codigoFornecedorPatrimonio=" + patrimonio.codigoFornecedorPatrimonio+ "&codigoSerial=" + patrimonio.codigoSerial+ "&nomeEntregador=" + patrimonio.nomeEntregador+ "&descricaoEquipamento=" + patrimonio.descricaoEquipamento+ "&descricaoJustificativa="+patrimonio.descricaoJustificativa;
     
        $http.post(serviceBase + 'Patrimonio/SalvarPatrimonioNovo', data ,  { withCredentials : true, headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).success(function(response){
            deferred.resolve(response);
        }).error(function(err){
            deferred.reject(err);
        });
        return deferred.promise;            
     };

    var _listaPatrimonios  = function(statusPatrimonio){
        var deferred = $q.defer();
        var data = "numeroPatrimonio=&numeroSerie=&tipoPatrimonio=0&statusPatrimonio="+statusPatrimonio+"&fornecedor=";
     
        $http.post(serviceBase + 'Patrimonio/ListarPatrimonio', data ,  { withCredentials : true, headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }).success(function(response){
            deferred.resolve(response);
        }).error(function(err){
            deferred.reject(err);
        });
        return deferred.promise;            
     };     

	var _acionaPopupSucesso = function(informacoes){

		var alertPopup = $ionicPopup.alert({
			title: informacoes.title,
			template: informacoes.body,
			okText: informacoes.btbBody, 
			okType: 'button-positive'
		});
	}

	var _acionaPopupErro = function(informacoes){

		var alertPopup = $ionicPopup.alert({
			title: informacoes.title,
			template: informacoes.body,
			okText: informacoes.btbBody, 
			okType: 'button-assertive'
		});
	}
	

	factoryPopup.getTipoPatrimonio = _getTipoPatrimonio;
	factoryPopup.getFornecedoresPatrimonio = _getFornecedoresPatrimonio;
	factoryPopup.checkExistePatrimonio = _checkExistePatrimonio;
	factoryPopup.salvaPatrimonio = _salvaPatrimonio;
    factoryPopup.listaPatrimonios = _listaPatrimonios;
    factoryPopup.obterUltimoNumero = _obterUltimoNumero;
	factoryPopup.acionaPopupSucesso = _acionaPopupSucesso;
	factoryPopup.acionaPopupErro = _acionaPopupErro;

	return factoryPopup;

});