## Functions

<dl>
<dt><a href="#getClickEventDetails">getClickEventDetails(event)</a> ⇒ <code>Object</code></dt>
<dd><p>get essential inforamation from click event</p>
</dd>
<dt><a href="#getMultiMediaEventDetails">getMultiMediaEventDetails(event)</a> ⇒ <code>Object</code></dt>
<dd><p>get essential inforamation from multimedia event</p>
</dd>
<dt><a href="#getKeyboardEventDetails">getKeyboardEventDetails(event)</a> ⇒ <code>Object</code></dt>
<dd><p>get essential inforamation from keyboard event</p>
</dd>
<dt><a href="#getEventDetails">getEventDetails(event)</a> ⇒ <code>Object</code></dt>
<dd><p>detect your event type and call its related function to get event information</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#UnknownEvent">UnknownEvent</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#MouseEvent">MouseEvent</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#MouseEvent">MouseEvent</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#KeyboardEvent">KeyboardEvent</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#MultimediaEvent">MultimediaEvent</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="getClickEventDetails"></a>

## getClickEventDetails(event) ⇒ <code>Object</code>
get essential inforamation from click event

**Kind**: global function
**Returns**: <code>Object</code> - return type, action and extra data from MouseEvent
**Author**: Amin Ashtiani

| Param | Type |
| --- | --- |
| event | [<code>MouseEvent</code>](#MouseEvent) |

<a name="getMultiMediaEventDetails"></a>

## getMultiMediaEventDetails(event) ⇒ <code>Object</code>
get essential inforamation from multimedia event

**Kind**: global function
**Returns**: <code>Object</code> - return type, action and extra data from MultimediaEvent
**Author**: Amin Ashtiani

| Param | Type |
| --- | --- |
| event | [<code>MultimediaEvent</code>](#MultimediaEvent) |

<a name="getKeyboardEventDetails"></a>

## getKeyboardEventDetails(event) ⇒ <code>Object</code>
get essential inforamation from keyboard event

**Kind**: global function
**Returns**: <code>Object</code> - return type, action and extra data from KeyboardEvent
**Author**: Amin Ashtiani

| Param | Type |
| --- | --- |
| event | [<code>KeyboardEvent</code>](#KeyboardEvent) |

<a name="getEventDetails"></a>

## getEventDetails(event) ⇒ <code>Object</code>
detect your event type and call its related function to get event information

**Kind**: global function
**Returns**: <code>Object</code> - return Event detail object
**Author**: Amin Ashtiani

| Param | Type |
| --- | --- |
| event | [<code>UnknownEvent</code>](#UnknownEvent) |

<a name="UnknownEvent"></a>

## UnknownEvent : <code>object</code>
**Kind**: global typedef
<a name="MouseEvent"></a>

## MouseEvent : <code>object</code>
**Kind**: global typedef
<a name="MouseEvent"></a>

## MouseEvent : <code>object</code>
**Kind**: global typedef
<a name="KeyboardEvent"></a>

## KeyboardEvent : <code>object</code>
**Kind**: global typedef
<a name="MultimediaEvent"></a>

## MultimediaEvent : <code>object</code>
**Kind**: global typedef