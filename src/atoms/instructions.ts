import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { instructions as defaultInstructions } from '../utils/conversation_config.js';

const storage = createJSONStorage<string>(() => localStorage);

export const instructionsAtom = atomWithStorage('instructions', defaultInstructions, storage, {
    getOnInit: true
}); 