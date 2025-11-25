'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

export default function Graph({ graphData }: { graphData: any }) {
    const router = useRouter();
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const graphRef = useRef<any>(null);

    useEffect(() => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });

        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 bg-black">
            <ForceGraph2D
                ref={graphRef}
                graphData={graphData}
                width={dimensions.width}
                height={dimensions.height}
                nodeLabel="name"
                nodeColor={() => '#a855f7'} // Purple-500
                linkColor={() => '#374151'} // Gray-700
                backgroundColor="#000000"
                nodeRelSize={6}
                linkWidth={1}
                linkDirectionalParticles={2}
                linkDirectionalParticleSpeed={0.005}
                onNodeClick={(node: any) => {
                    router.push(`/note/${node.id}`);
                }}
                cooldownTicks={100}
                onEngineStop={() => {
                    if (graphRef.current) {
                        graphRef.current.zoomToFit(400);
                    }
                }}
            />
        </div>
    );
}
