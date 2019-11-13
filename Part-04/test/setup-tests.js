// (1) It's very likely you will come across common code which is required to run at the beginning of each single test files
// For such situations, it's convenient to create "setup-tests" files like this, where you can bootstrap any code you want
import {createSerializer} from 'jest-emotion'
import * as emotion from 'emotion'

expect.addSnapshotSerializer(createSerializer(emotion))
