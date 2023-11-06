/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* JS-SDK Verify the configuration parameters of application identity and permission
*/
export class WeComIsvJsSdkAgentConfigVo {
    /**
    * The corpId of the currently logged in WeCom
    */
    'authCorpId': string;
    /**
    * The application ID of the currently logged in WeCom
    */
    'agentId': string;
    /**
    * Time stamp of signature generation
    */
    'timestamp': number;
    /**
    * Generate a random string of signatures
    */
    'random': string;
    /**
    * Generated Signature
    */
    'signature': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authCorpId",
            "baseName": "authCorpId",
            "type": "string",
            "format": ""
        },
        {
            "name": "agentId",
            "baseName": "agentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "random",
            "baseName": "random",
            "type": "string",
            "format": ""
        },
        {
            "name": "signature",
            "baseName": "signature",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WeComIsvJsSdkAgentConfigVo.attributeTypeMap;
    }

    public constructor() {
    }
}
