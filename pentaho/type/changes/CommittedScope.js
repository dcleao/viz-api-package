/*!
 * Copyright 2010 - 2016 Pentaho Corporation. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([
  "./AbstractTransactionScope"
], function(AbstractTransactionScope) {

  "use strict";

  return AbstractTransactionScope.extend(/** @lends pentaho.type.changes.CommittedScope# */{
    /**
     * @alias CommittedScope
     * @memberOf pentaho.type.changes
     * @class
     * @extends pentaho.type.changes.AbstractTransactionScope
     *
     * @classDesc The `CommittedScope` class provides a way for a certain region of code to
     * read the committed values of instances.
     *
     * @constructor
     * @description Creates a `CommittedScope`.
     *
     * @param {!pentaho.type.Context} context - The associated context.
     */
    constructor: function(context) {
      this.base(context, null);
    }
  });
});
