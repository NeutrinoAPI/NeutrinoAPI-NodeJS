# Getting started

The general-purpose API

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| userId | Your user ID |
| apiKey | Your API key |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.userId = "userId"; // Your user ID
lib.Configuration.apiKey = "apiKey"; // Your API key

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [Imaging](#imaging)
* [Telephony](#telephony)
* [DataTools](#data_tools)
* [SecurityAndNetworking](#security_and_networking)
* [Geolocation](#geolocation)
* [ECommerce](#e_commerce)
* [WWW](#www)

## <a name="imaging"></a>![Class: ](https://apidocs.io/img/class.png ".Imaging") Imaging

### Get singleton instance

The singleton instance of the ``` Imaging ``` class can be accessed from the API Client.

```javascript
var controller = lib.Imaging;
```

### <a name="image_resize"></a>![Method: ](https://apidocs.io/img/method.png ".Imaging.imageResize") imageResize

> Resize an image and output as either JPEG or PNG. See: https://www.neutrinoapi.com/api/image-resize/


```javascript
function imageResize(imageUrl, width, height, format, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| imageUrl |  ``` Required ```  | The URL to the source image |
| width |  ``` Required ```  | The width to resize to (in px) while preserving aspect ratio |
| height |  ``` Required ```  | The height to resize to (in px) while preserving aspect ratio |
| format |  ``` Optional ```  ``` DefaultValue ```  | The output image format, can be either png or jpg |



#### Example Usage

```javascript

    var imageUrl = 'image-url';
    var width = 111;
    var height = 111;
    var format = 'format';

    TestHelper.getFileContents('url', function(data) {
        controller.imageResize(imageUrl, width, height, format, function(error, response, context) {

        });
    });
```



### <a name="q_r_code"></a>![Method: ](https://apidocs.io/img/method.png ".Imaging.qRCode") qRCode

> Generate a QR code as a PNG image. See: https://www.neutrinoapi.com/api/qr-code/


```javascript
function qRCode(content, width, height, fgColor, bgColor, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| content |  ``` Required ```  | The content to encode into the QR code (e.g. a URL or a phone number) |
| width |  ``` Optional ```  ``` DefaultValue ```  | The width of the QR code (in px) |
| height |  ``` Optional ```  ``` DefaultValue ```  | The height of the QR code (in px) |
| fgColor |  ``` Optional ```  ``` DefaultValue ```  | The QR code foreground color |
| bgColor |  ``` Optional ```  ``` DefaultValue ```  | The QR code background color |



#### Example Usage

```javascript

    var content = 'content';
    var width = 111;
    var height = 111;
    var fgColor = 'fg-color';
    var bgColor = 'bg-color';

    TestHelper.getFileContents('url', function(data) {
        controller.qRCode(content, width, height, fgColor, bgColor, function(error, response, context) {

        });
    });
```



### <a name="image_watermark"></a>![Method: ](https://apidocs.io/img/method.png ".Imaging.imageWatermark") imageWatermark

> Watermark one image with another image. See: https://www.neutrinoapi.com/api/image-watermark/


```javascript
function imageWatermark(imageUrl, watermarkUrl, opacity, format, position, width, height, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| imageUrl |  ``` Required ```  | The URL to the source image |
| watermarkUrl |  ``` Required ```  | The URL to the watermark image |
| opacity |  ``` Optional ```  ``` DefaultValue ```  | The opacity of the watermark (0 to 100) |
| format |  ``` Optional ```  ``` DefaultValue ```  | The output image format, can be either png or jpg |
| position |  ``` Optional ```  ``` DefaultValue ```  | The position of the watermark image, possible values are: center, top-left, top-center, top-right, bottom-left, bottom-center, bottom-right |
| width |  ``` Optional ```  | If set resize the resulting image to this width (in px) while preserving aspect ratio |
| height |  ``` Optional ```  | If set resize the resulting image to this height (in px) while preserving aspect ratio |



#### Example Usage

```javascript

    var imageUrl = 'image-url';
    var watermarkUrl = 'watermark-url';
    var opacity = 111;
    var format = 'format';
    var position = 'position';
    var width = 111;
    var height = 111;

    TestHelper.getFileContents('url', function(data) {
        controller.imageWatermark(imageUrl, watermarkUrl, opacity, format, position, width, height, function(error, response, context) {

        });
    });
```



### <a name="h_tml5_render"></a>![Method: ](https://apidocs.io/img/method.png ".Imaging.hTML5Render") hTML5Render

> Render HTML content to PDF, JPG or PNG. See: https://www.neutrinoapi.com/api/html5-render/


```javascript
function hTML5Render(content, format, pageSize, title, margin, marginLeft, marginRight, marginTop, marginBottom, landscape, zoom, grayscale, mediaPrint, mediaQueries, forms, css, imageWidth, imageHeight, renderDelay, headerTextLeft, headerTextCenter, headerTextRight, headerSize, headerFont, headerFontSize, headerLine, footerTextLeft, footerTextCenter, footerTextRight, footerSize, footerFont, footerFontSize, footerLine, pageWidth, pageHeight, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| content |  ``` Required ```  | The HTML content. This can be either a URL to load HTML from or an actual HTML content string |
| format |  ``` Optional ```  ``` DefaultValue ```  | Which format to output, available options are: PDF, PNG, JPG |
| pageSize |  ``` Optional ```  ``` DefaultValue ```  | Set the document page size, can be one of: A0 - A9, B0 - B10, Comm10E, DLE or Letter |
| title |  ``` Optional ```  | The document title |
| margin |  ``` Optional ```  ``` DefaultValue ```  | The document margin (in mm) |
| marginLeft |  ``` Optional ```  ``` DefaultValue ```  | The document left margin (in mm) |
| marginRight |  ``` Optional ```  ``` DefaultValue ```  | The document right margin (in mm) |
| marginTop |  ``` Optional ```  ``` DefaultValue ```  | The document top margin (in mm) |
| marginBottom |  ``` Optional ```  ``` DefaultValue ```  | The document bottom margin (in mm) |
| landscape |  ``` Optional ```  ``` DefaultValue ```  | Set the document to lanscape orientation |
| zoom |  ``` Optional ```  ``` DefaultValue ```  | Set the zoom factor when rendering the page (2.0 for double size, 0.5 for half size) |
| grayscale |  ``` Optional ```  ``` DefaultValue ```  | Render the final document in grayscale |
| mediaPrint |  ``` Optional ```  ``` DefaultValue ```  | Use @media print CSS styles to render the document |
| mediaQueries |  ``` Optional ```  ``` DefaultValue ```  | Activate all @media queries before rendering. This can be useful if you wan't to render the mobile version of a responsive website |
| forms |  ``` Optional ```  ``` DefaultValue ```  | Generate real (fillable) PDF forms from HTML forms |
| css |  ``` Optional ```  | Inject custom CSS into the HTML. e.g. 'body { background-color: red;}' |
| imageWidth |  ``` Optional ```  ``` DefaultValue ```  | If rendering to an image format (PNG or JPG) use this image width (in pixels) |
| imageHeight |  ``` Optional ```  | If rendering to an image format (PNG or JPG) use this image height (in pixels). The default is automatic which dynamically sets the image height based on the content |
| renderDelay |  ``` Optional ```  ``` DefaultValue ```  | Number of milliseconds to wait before rendering the page (can be useful for pages with animations etc) |
| headerTextLeft |  ``` Optional ```  | Text to print to the left-hand side header of each page. e.g. 'My header - Page {page_number} of {total_pages}' |
| headerTextCenter |  ``` Optional ```  | Text to print to the center header of each page |
| headerTextRight |  ``` Optional ```  | Text to print to the right-hand side header of each page |
| headerSize |  ``` Optional ```  ``` DefaultValue ```  | The height of your header (in mm) |
| headerFont |  ``` Optional ```  ``` DefaultValue ```  | Set the header font. Fonts available: Times, Courier, Helvetica, Arial |
| headerFontSize |  ``` Optional ```  ``` DefaultValue ```  | Set the header font size (in pt) |
| headerLine |  ``` Optional ```  ``` DefaultValue ```  | Draw a full page width horizontal line under your header |
| footerTextLeft |  ``` Optional ```  | Text to print to the left-hand side footer of each page. e.g. 'My footer - Page {page_number} of {total_pages}' |
| footerTextCenter |  ``` Optional ```  | Text to print to the center header of each page |
| footerTextRight |  ``` Optional ```  | Text to print to the right-hand side header of each page |
| footerSize |  ``` Optional ```  ``` DefaultValue ```  | The height of your footer (in mm) |
| footerFont |  ``` Optional ```  ``` DefaultValue ```  | Set the footer font. Fonts available: Times, Courier, Helvetica, Arial |
| footerFontSize |  ``` Optional ```  ``` DefaultValue ```  | Set the footer font size (in pt) |
| footerLine |  ``` Optional ```  ``` DefaultValue ```  | Draw a full page width horizontal line above your footer |
| pageWidth |  ``` Optional ```  | Set the PDF page width explicitly (in mm) |
| pageHeight |  ``` Optional ```  | Set the PDF page height explicitly (in mm) |



#### Example Usage

```javascript

    var content = 'content';
    var format = 'format';
    var pageSize = 'page-size';
    var title = 'title';
    var margin = 111;
    var marginLeft = 111;
    var marginRight = 111;
    var marginTop = 111;
    var marginBottom = 111;
    var landscape = false;
    var zoom = 111;
    var grayscale = false;
    var mediaPrint = false;
    var mediaQueries = false;
    var forms = false;
    var css = 'css';
    var imageWidth = 111;
    var imageHeight = 111;
    var renderDelay = 111;
    var headerTextLeft = 'header-text-left';
    var headerTextCenter = 'header-text-center';
    var headerTextRight = 'header-text-right';
    var headerSize = 111;
    var headerFont = 'header-font';
    var headerFontSize = 111;
    var headerLine = false;
    var footerTextLeft = 'footer-text-left';
    var footerTextCenter = 'footer-text-center';
    var footerTextRight = 'footer-text-right';
    var footerSize = 111;
    var footerFont = 'footer-font';
    var footerFontSize = 111;
    var footerLine = false;
    var pageWidth = 111;
    var pageHeight = 111;

    TestHelper.getFileContents('url', function(data) {
        controller.hTML5Render(content, format, pageSize, title, margin, marginLeft, marginRight, marginTop, marginBottom, landscape, zoom, grayscale, mediaPrint, mediaQueries, forms, css, imageWidth, imageHeight, renderDelay, headerTextLeft, headerTextCenter, headerTextRight, headerSize, headerFont, headerFontSize, headerLine, footerTextLeft, footerTextCenter, footerTextRight, footerSize, footerFont, footerFontSize, footerLine, pageWidth, pageHeight, function(error, response, context) {

        });
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="telephony"></a>![Class: ](https://apidocs.io/img/class.png ".Telephony") Telephony

### Get singleton instance

The singleton instance of the ``` Telephony ``` class can be accessed from the API Client.

```javascript
var controller = lib.Telephony;
```

### <a name="verify_security_code"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.verifySecurityCode") verifySecurityCode

> Check if a security code from one of the verify APIs is valid. See: https://www.neutrinoapi.com/api/verify-security-code/


```javascript
function verifySecurityCode(securityCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| securityCode |  ``` Required ```  | The security code to verify |



#### Example Usage

```javascript

    var securityCode = 'security-code';

    controller.verifySecurityCode(securityCode, function(error, response, context) {

    
    });
```



### <a name="h_lr_lookup"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.hLRLookup") hLRLookup

> Connect to the global mobile cellular network and retrieve the status of a mobile device. See: https://www.neutrinoapi.com/api/hlr-lookup/


```javascript
function hLRLookup(number, countryCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | A phone number |
| countryCode |  ``` Optional ```  | ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign) |



#### Example Usage

```javascript

    var number = 'number';
    var countryCode = 'country-code';

    controller.hLRLookup(number, countryCode, function(error, response, context) {

    
    });
```



### <a name="phone_playback"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.phonePlayback") phonePlayback

> Make an automated call to any valid phone number and playback an audio message. See: https://www.neutrinoapi.com/api/phone-playback/


```javascript
function phonePlayback(number, audioUrl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | The phone number to call. Must be in valid international format |
| audioUrl |  ``` Required ```  | A URL to a valid audio file. Accepted audio formats are: <ul> <li>MP3</li> <li>WAV</li> <li>OGG</li> </ul>You can use the following MP3 URL for testing: https://www.neutrinoapi.com/test-files/test1.mp3 |



#### Example Usage

```javascript

    var number = 'number';
    var audioUrl = 'audio-url';

    controller.phonePlayback(number, audioUrl, function(error, response, context) {

    
    });
```



### <a name="s_ms_verify"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.sMSVerify") sMSVerify

> Send a unique security code to any mobile device via SMS. See: https://www.neutrinoapi.com/api/sms-verify/


```javascript
function sMSVerify(number, codeLength, securityCode, countryCode, languageCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | The phone number to send a verification code to |
| codeLength |  ``` Optional ```  ``` DefaultValue ```  | The number of digits to use in the security code (must be between 4 and 12) |
| securityCode |  ``` Optional ```  | Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code |
| countryCode |  ``` Optional ```  | ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign) |
| languageCode |  ``` Optional ```  ``` DefaultValue ```  | The language to send the verification code in, available languages are: <ul> <li>de - German</li> <li>en - English</li> <li>es - Spanish</li> <li>fr - French</li> <li>it - Italian</li> <li>pt - Portuguese</li> <li>ru - Russian</li> </ul> |



#### Example Usage

```javascript

    var number = 'number';
    var codeLength = 111;
    var securityCode = 111;
    var countryCode = 'country-code';
    var languageCode = 'language-code';

    controller.sMSVerify(number, codeLength, securityCode, countryCode, languageCode, function(error, response, context) {

    
    });
```



### <a name="s_ms_message"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.sMSMessage") sMSMessage

> Send a free-form message to any mobile device via SMS. See: https://www.neutrinoapi.com/api/sms-message/


```javascript
function sMSMessage(number, message, countryCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | The phone number to send a message to |
| message |  ``` Required ```  | The SMS message to send. Messages are truncated to a maximum of 150 characters for ASCII content OR 70 characters for UTF content |
| countryCode |  ``` Optional ```  | ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign) |



#### Example Usage

```javascript

    var number = 'number';
    var message = 'message';
    var countryCode = 'country-code';

    controller.sMSMessage(number, message, countryCode, function(error, response, context) {

    
    });
```



### <a name="phone_verify"></a>![Method: ](https://apidocs.io/img/method.png ".Telephony.phoneVerify") phoneVerify

> Make an automated call to any valid phone number and playback a unique security code. See: https://www.neutrinoapi.com/api/phone-verify/


```javascript
function phoneVerify(number, codeLength, securityCode, playbackDelay, countryCode, languageCode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | The phone number to send the verification code to |
| codeLength |  ``` Optional ```  ``` DefaultValue ```  | The number of digits to use in the security code (between 4 and 12) |
| securityCode |  ``` Optional ```  | Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code |
| playbackDelay |  ``` Optional ```  ``` DefaultValue ```  | The delay in milliseconds between the playback of each security code |
| countryCode |  ``` Optional ```  | ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign) |
| languageCode |  ``` Optional ```  ``` DefaultValue ```  | The language to playback the verification code in, available languages are: <ul> <li>de - German</li> <li>en - English</li> <li>es - Spanish</li> <li>fr - French</li> <li>it - Italian</li> <li>pt - Portuguese</li> <li>ru - Russian</li> </ul> |



#### Example Usage

```javascript

    var number = 'number';
    var codeLength = 111;
    var securityCode = 111;
    var playbackDelay = 111;
    var countryCode = 'country-code';
    var languageCode = 'language-code';

    controller.phoneVerify(number, codeLength, securityCode, playbackDelay, countryCode, languageCode, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="data_tools"></a>![Class: ](https://apidocs.io/img/class.png ".DataTools") DataTools

### Get singleton instance

The singleton instance of the ``` DataTools ``` class can be accessed from the API Client.

```javascript
var controller = lib.DataTools;
```

### <a name="email_validate"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.emailValidate") emailValidate

> Parse, validate and clean an email address. See: https://www.neutrinoapi.com/api/email-validate/


```javascript
function emailValidate(email, fixTypos, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | An email address |
| fixTypos |  ``` Optional ```  ``` DefaultValue ```  | Automatically attempt to fix typos in the address |



#### Example Usage

```javascript

    var email = 'email';
    var fixTypos = false;

    controller.emailValidate(email, fixTypos, function(error, response, context) {

    
    });
```



### <a name="user_agent_info"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.userAgentInfo") userAgentInfo

> Parse, validate and get detailed user-agent information from a user agent string. See: https://www.neutrinoapi.com/api/user-agent-info/


```javascript
function userAgentInfo(userAgent, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userAgent |  ``` Required ```  | A user agent string |



#### Example Usage

```javascript

    var userAgent = 'user-agent';

    controller.userAgentInfo(userAgent, function(error, response, context) {

    
    });
```



### <a name="bad_word_filter"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.badWordFilter") badWordFilter

> Detect bad words, swear words and profanity in a given text. See: https://www.neutrinoapi.com/api/bad-word-filter/


```javascript
function badWordFilter(content, censorCharacter, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| content |  ``` Required ```  | The content to scan. This can be either a URL to load content from or an actual content string |
| censorCharacter |  ``` Optional ```  | The character to use to censor out the bad words found |



#### Example Usage

```javascript

    var content = 'content';
    var censorCharacter = 'censor-character';

    controller.badWordFilter(content, censorCharacter, function(error, response, context) {

    
    });
```



### <a name="convert"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.convert") convert

> A powerful unit conversion tool. See: https://www.neutrinoapi.com/api/convert/


```javascript
function convert(fromValue, fromType, toType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| fromValue |  ``` Required ```  | The value to convert from (e.g. 10.95) |
| fromType |  ``` Required ```  | The type of the value to convert from (e.g. USD) |
| toType |  ``` Required ```  | The type to convert to (e.g. EUR) |



#### Example Usage

```javascript

    var fromValue = 'from-value';
    var fromType = 'from-type';
    var toType = 'to-type';

    controller.convert(fromValue, fromType, toType, function(error, response, context) {

    
    });
```



### <a name="phone_validate"></a>![Method: ](https://apidocs.io/img/method.png ".DataTools.phoneValidate") phoneValidate

> Parse, validate and get location information about a phone number. See: https://www.neutrinoapi.com/api/phone-validate/


```javascript
function phoneValidate(number, countryCode, ip, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| number |  ``` Required ```  | A phone number. This can be in international format (E.164) or local format. If passing local format you should use the 'country-code' or 'ip' options as well |
| countryCode |  ``` Optional ```  | ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign) |
| ip |  ``` Optional ```  | Pass in a users IP address and we will assume numbers are based in the country of the IP address |



#### Example Usage

```javascript

    var number = 'number';
    var countryCode = 'country-code';
    var ip = 'ip';

    controller.phoneValidate(number, countryCode, ip, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="security_and_networking"></a>![Class: ](https://apidocs.io/img/class.png ".SecurityAndNetworking") SecurityAndNetworking

### Get singleton instance

The singleton instance of the ``` SecurityAndNetworking ``` class can be accessed from the API Client.

```javascript
var controller = lib.SecurityAndNetworking;
```

### <a name="i_p_probe"></a>![Method: ](https://apidocs.io/img/method.png ".SecurityAndNetworking.iPProbe") iPProbe

> Analyze and extract provider information for an IP address. See: https://www.neutrinoapi.com/api/ip-probe/


```javascript
function iPProbe(ip, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ip |  ``` Required ```  | IPv4 or IPv6 address |



#### Example Usage

```javascript

    var ip = 'ip';

    controller.iPProbe(ip, function(error, response, context) {

    
    });
```



### <a name="email_verify"></a>![Method: ](https://apidocs.io/img/method.png ".SecurityAndNetworking.emailVerify") emailVerify

> SMTP based email address verification. See: https://www.neutrinoapi.com/api/email-verify/


```javascript
function emailVerify(email, fixTypos, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | An email address |
| fixTypos |  ``` Optional ```  ``` DefaultValue ```  | Automatically attempt to fix typos in the address |



#### Example Usage

```javascript

    var email = 'email';
    var fixTypos = false;

    controller.emailVerify(email, fixTypos, function(error, response, context) {

    
    });
```



### <a name="i_p_blocklist"></a>![Method: ](https://apidocs.io/img/method.png ".SecurityAndNetworking.iPBlocklist") iPBlocklist

> The IP Blocklist API will detect potentially malicious or dangerous IP addresses. See: https://www.neutrinoapi.com/api/ip-blocklist/


```javascript
function iPBlocklist(ip, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ip |  ``` Required ```  | An IPv4 or IPv6 address |



#### Example Usage

```javascript

    var ip = 'ip';

    controller.iPBlocklist(ip, function(error, response, context) {

    
    });
```



### <a name="host_reputation"></a>![Method: ](https://apidocs.io/img/method.png ".SecurityAndNetworking.hostReputation") hostReputation

> Check the reputation of an IP address, domain name, FQDN or URL against a comprehensive list of blacklists and blocklists. See: https://www.neutrinoapi.com/api/host-reputation/


```javascript
function hostReputation(host, listRating, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| host |  ``` Required ```  | An IP address, domain name, FQDN or URL. If you supply a domain/URL it will be checked against the URI DNSBL lists |
| listRating |  ``` Optional ```  ``` DefaultValue ```  | Only check lists with this rating or better |



#### Example Usage

```javascript

    var host = 'host';
    var listRating = 111;

    controller.hostReputation(host, listRating, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="geolocation"></a>![Class: ](https://apidocs.io/img/class.png ".Geolocation") Geolocation

### Get singleton instance

The singleton instance of the ``` Geolocation ``` class can be accessed from the API Client.

```javascript
var controller = lib.Geolocation;
```

### <a name="geocode_reverse"></a>![Method: ](https://apidocs.io/img/method.png ".Geolocation.geocodeReverse") geocodeReverse

> Convert a geographic coordinate (latitude and longitude) into a real world address. See: https://www.neutrinoapi.com/api/geocode-reverse/


```javascript
function geocodeReverse(latitude, longitude, languageCode, zoom, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| latitude |  ``` Required ```  | The location latitude in decimal degrees format |
| longitude |  ``` Required ```  | The location longitude in decimal degrees format |
| languageCode |  ``` Optional ```  ``` DefaultValue ```  | The language to display results in, available languages are: <ul> <li>de, en, es, fr, it, pt, ru</li> </ul> |
| zoom |  ``` Optional ```  ``` DefaultValue ```  | The zoom level to respond with: <ul> <li>address - the most precise address available</li> <li>street - the street level</li> <li>city - the city level</li> <li>state - the state level</li> <li>country - the country level</li> </ul> |



#### Example Usage

```javascript

    var latitude = 'latitude';
    var longitude = 'longitude';
    var languageCode = 'language-code';
    var zoom = 'zoom';

    controller.geocodeReverse(latitude, longitude, languageCode, zoom, function(error, response, context) {

    
    });
```



### <a name="i_p_info"></a>![Method: ](https://apidocs.io/img/method.png ".Geolocation.iPInfo") iPInfo

> Get location information about an IP address and do reverse DNS (PTR) lookups. See: https://www.neutrinoapi.com/api/ip-info/


```javascript
function iPInfo(ip, reverseLookup, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| ip |  ``` Required ```  | IPv4 or IPv6 address |
| reverseLookup |  ``` Optional ```  ``` DefaultValue ```  | Do a reverse DNS (PTR) lookup. This option can add extra delay to the request so only use it if you need it |



#### Example Usage

```javascript

    var ip = 'ip';
    var reverseLookup = false;

    controller.iPInfo(ip, reverseLookup, function(error, response, context) {

    
    });
```



### <a name="geocode_address"></a>![Method: ](https://apidocs.io/img/method.png ".Geolocation.geocodeAddress") geocodeAddress

> Geocode an address, partial address or just the name of a place. See: https://www.neutrinoapi.com/api/geocode-address/


```javascript
function geocodeAddress(address, countryCode, languageCode, fuzzySearch, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| address |  ``` Required ```  | The address, partial address or name of a place to try and locate |
| countryCode |  ``` Optional ```  | The ISO 2-letter country code to be biased towards (the default is no country bias) |
| languageCode |  ``` Optional ```  ``` DefaultValue ```  | The language to display results in, available languages are: <ul> <li>de, en, es, fr, it, pt, ru</li> </ul> |
| fuzzySearch |  ``` Optional ```  ``` DefaultValue ```  | If no matches are found for the given address, start performing a recursive fuzzy search until a geolocation is found. This option is recommended for processing user input or implementing auto-complete. We use a combination of approximate string matching and data cleansing to find possible location matches |



#### Example Usage

```javascript

    var address = 'address';
    var countryCode = 'country-code';
    var languageCode = 'language-code';
    var fuzzySearch = false;

    controller.geocodeAddress(address, countryCode, languageCode, fuzzySearch, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="e_commerce"></a>![Class: ](https://apidocs.io/img/class.png ".ECommerce") ECommerce

### Get singleton instance

The singleton instance of the ``` ECommerce ``` class can be accessed from the API Client.

```javascript
var controller = lib.ECommerce;
```

### <a name="b_in_lookup"></a>![Method: ](https://apidocs.io/img/method.png ".ECommerce.bINLookup") bINLookup

> Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup. See: https://www.neutrinoapi.com/api/bin-lookup/


```javascript
function bINLookup(binNumber, customerIp, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| binNumber |  ``` Required ```  | The BIN or IIN number (the first 6 digits of a credit card number) |
| customerIp |  ``` Optional ```  | Pass in the customers IP address and we will return some extra information about them |



#### Example Usage

```javascript

    var binNumber = 'bin-number';
    var customerIp = 'customer-ip';

    controller.bINLookup(binNumber, customerIp, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="www"></a>![Class: ](https://apidocs.io/img/class.png ".WWW") WWW

### Get singleton instance

The singleton instance of the ``` WWW ``` class can be accessed from the API Client.

```javascript
var controller = lib.WWW;
```

### <a name="u_rl_info"></a>![Method: ](https://apidocs.io/img/method.png ".WWW.uRLInfo") uRLInfo

> Parse, analyze and retrieve content from the supplied URL. See: https://www.neutrinoapi.com/api/url-info/


```javascript
function uRLInfo(url, fetchContent, ignoreCertificateErrors, timeout, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| url |  ``` Required ```  | The URL to probe |
| fetchContent |  ``` Optional ```  ``` DefaultValue ```  | If this URL responds with html, text, json or xml then return the response. This option is useful if you want to perform further processing on the URL content (e.g. with the HTML Extract or HTML Clean APIs) |
| ignoreCertificateErrors |  ``` Optional ```  ``` DefaultValue ```  | Ignore any TLS/SSL certificate errors and load the URL anyway |
| timeout |  ``` Optional ```  ``` DefaultValue ```  | Timeout in seconds. Give up if still trying to load the URL after this number of seconds |



#### Example Usage

```javascript

    var url = 'url';
    var fetchContent = false;
    var ignoreCertificateErrors = false;
    var timeout = 111;

    controller.uRLInfo(url, fetchContent, ignoreCertificateErrors, timeout, function(error, response, context) {

    
    });
```



### <a name="h_tml_clean"></a>![Method: ](https://apidocs.io/img/method.png ".WWW.hTMLClean") hTMLClean

> Clean and sanitize untrusted HTML. See: https://www.neutrinoapi.com/api/html-clean/


```javascript
function hTMLClean(content, outputType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| content |  ``` Required ```  | The HTML content. This can be either a URL to load HTML from or an actual HTML content string |
| outputType |  ``` Required ```  | The level of sanitization, possible values are: <b>plain-text</b>: reduce the content to plain text only (no HTML tags at all) <b>simple-text</b>: allow only very basic text formatting tags like b, em, i, strong, u <b>basic-html</b>: allow advanced text formatting and hyper links <b>basic-html-with-images</b>: same as basic html but also allows image tags <b>advanced-html</b>: same as basic html with images but also allows many more common HTML tags like table, ul, dl, pre |



#### Example Usage

```javascript

    var content = 'content';
    var outputType = 'output-type';

    TestHelper.getFileContents('url', function(data) {
        controller.hTMLClean(content, outputType, function(error, response, context) {

        });
    });
```



### <a name="browser_bot"></a>![Method: ](https://apidocs.io/img/method.png ".WWW.browserBot") browserBot

> Browser bot can extract content, interact with keyboard and mouse events, and execute JavaScript on a website. See: https://www.neutrinoapi.com/api/browser-bot/


```javascript
function browserBot(url, timeout, delay, selector, exec, userAgent, ignoreCertificateErrors, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| url |  ``` Required ```  | The URL to load |
| timeout |  ``` Optional ```  ``` DefaultValue ```  | Timeout in seconds. Give up if still trying to load the page after this number of seconds |
| delay |  ``` Optional ```  ``` DefaultValue ```  | Delay in seconds to wait before capturing any page data, executing selectors or JavaScript |
| selector |  ``` Optional ```  | Extract content from the page DOM using this selector. Commonly known as a CSS selector, you can find a good reference <a href="https://www.w3schools.com/cssref/css_selectors.asp">here</a> |
| exec |  ``` Optional ```  ``` Collection ```  | Execute JavaScript on the page. Each array element should contain a valid JavaScript statement in string form. If a statement returns any kind of value it will be returned in the 'exec-results' response. For your convenience you can also use the following special shortcut functions: <div> sleep(seconds); Just wait/sleep for the specified number of seconds. click('selector'); Click on the first element matching the given selector. focus('selector'); Focus on the first element matching the given selector. keys('characters'); Send the specified keyboard characters. Use click() or focus() first to send keys to a specific element. enter(); Send the Enter key. tab(); Send the Tab key. </div> Example: <div> [ "click('#button-id')", "sleep(1)", "click('.field-class')", "keys('1234')", "enter()" ] </div> |
| userAgent |  ``` Optional ```  | Override the browsers default user-agent string with this one |
| ignoreCertificateErrors |  ``` Optional ```  ``` DefaultValue ```  | Ignore any TLS/SSL certificate errors and load the page anyway |



#### Example Usage

```javascript

    var url = 'url';
    var timeout = 111;
    var delay = 111;
    var selector = 'selector';
    var exec = ['exec'];
    var userAgent = 'user-agent';
    var ignoreCertificateErrors = false;

    controller.browserBot(url, timeout, delay, selector, exec, userAgent, ignoreCertificateErrors, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



