import {atom,selector} from 'recoil'

export const networkAtom = atom( {
    key : 'networkAtom',
    default : 98
})

export const messagingAtom = atom( {
    key : 'messagingAtom',
    default :1 
})

export const jobsAtom = atom ( {
    key : 'jobsAtom',
    default : 12
})

export const notificationAtom = atom ( {
    key : 'notificationAtom',
    default : 4
})

export  const notificationSelector = selector( {
    key : 'notificationSelector',
    get : ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount= get(jobsAtom);
        const messagingCount = get(messagingAtom);
        const notificationCount = get(notificationAtom);
        return networkAtomCount + jobsAtomCount + messagingCount + notificationCount;
    }
})