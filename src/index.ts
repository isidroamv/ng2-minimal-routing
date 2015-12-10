import 'zone.js';
import 'reflect-metadata';

import {InboxApp} from './inbox-app';
import {provide, bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from 'angular2/router';

import {reflector} from 'angular2/src/core/reflection/reflection';
import {ReflectionCapabilities} from 'angular2/src/core/reflection/reflection_capabilities';

reflector.reflectionCapabilities = new ReflectionCapabilities();
bootstrap(InboxApp, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);