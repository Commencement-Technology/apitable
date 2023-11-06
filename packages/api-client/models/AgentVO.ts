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

export class AgentVO {
    /**
    * Ai id
    */
    'aiId'?: string;
    /**
    * Agent name
    */
    'agentName'?: string;
    /**
    * Agent id
    */
    'agentId'?: string;
    /**
    * Agent pre id
    */
    'preAgentId'?: string;
    /**
    * Agent icon
    */
    'icon'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "aiId",
            "baseName": "aiId",
            "type": "string",
            "format": ""
        },
        {
            "name": "agentName",
            "baseName": "agentName",
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
            "name": "preAgentId",
            "baseName": "preAgentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AgentVO.attributeTypeMap;
    }

    public constructor() {
    }
}

