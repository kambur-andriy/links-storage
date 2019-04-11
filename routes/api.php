<?php

Route::get('/tags', 'ApiController@tagsList');
Route::post('/tag/save', 'ApiController@saveTag');


Route::get('/links', 'ApiController@linksList');
Route::post('/link/save', 'ApiController@saveLink');
