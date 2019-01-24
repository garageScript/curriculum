/* Given a binary tree,
return the maximum distance between any 2 nodes
Examples:

    const a = {
        val: 30,
        right: {
            val: 50,
            right: {
                val: 10
            },
            left: {
                val: 10
            },
        },
        left: {
            val: 50
        }
    };
solution(a); // should return 3
const a = {
    val: 30,
    left: {
        val: 1
    },
    right: {
        val: 2
    }
};
solution(a); // should return 2
/*