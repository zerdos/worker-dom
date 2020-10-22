/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Element, registerSubclass } from './Element';
import { NamespaceURI, Node, NodeName } from './Node';
import { NodeType, SVG_NAMESPACE } from '../../transfer/TransferrableNodes';

export class SVGElement extends Element {
  constructor(nodeType: NodeType, localName: NodeName, namespaceURI: NamespaceURI, ownerDocument: Node) {
    super(nodeType, localName, SVG_NAMESPACE, ownerDocument);
    // Element uppercases its nodeName, but SVG elements don't.
    this.nodeName = localName;
  }
}
registerSubclass('svg', SVGElement, SVG_NAMESPACE);
