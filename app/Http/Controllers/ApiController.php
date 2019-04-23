<?php

namespace App\Http\Controllers;

use App\Models\Link;
use App\Models\Tag;
use Illuminate\Http\Request;

class ApiController extends Controller
{

	/**
	 * Save tag
	 *
	 * @param Request $request
	 *
	 * @return JSON
	 */
	public function saveTag(Request $request)
	{
		$request->validate([
			'text' => 'bail|required|string|unique:tags,text'
		]);

		$tag = Tag::create(
			$request->only(['text'])
		);

		return response()->json(
			$tag
		);
	}

	/**
	 * Tags list
	 *
	 * @return JSON
	 */
	public function tagsList()
	{
		return response()->json(
			Tag::orderBy('id', 'desc')->get()
		);
	}

	/**
	 * Save link
	 *
	 * @param Request $request
	 *
	 * @return JSON
	 */
	public function saveLink(Request $request)
	{
		$request->validate([
			'id' => 'bail|required|integer',
			'name' => 'bail|required|string',
			'url' => 'bail|required|url|unique:links,url',
			'tags' => 'bail|required|array',
		]);

		if ($request->id == 0) {
			$link = Link::create(
				$request->only(['name', 'url'])
			);

			$link->tags()->attach($request->tags);
		} else {
			$link = Link::find($request->id);

			$link->name = $request->name;
			$link->url = $request->url;

			$link->save();

			$link->tags()->sync($request->tags);
		}

		return response()->json(
			$link->load('tags')
		);
	}

	/**
	 * Get initial data - links and tags
	 *
	 *
	 * @return JSON
	 */
	public function linksList()
	{
		return response()->json(
			Link::with('tags')->orderBy('id', 'desc')->get()
		);
	}

}
