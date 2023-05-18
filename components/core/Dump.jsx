import React from 'react';

const Dump = ({ data }) => (
	<div className="bg-gray-300/50 p-2">
		<pre className="overflow-x-auto p-4 bg-white shadow">
            {JSON.stringify(data, null, 2)}
        </pre>
	</div>
);

export default Dump;
