import Dropdown from '@/components/ui/dropdown';

const SystemKits = () => {
    const kits = [
        { id: 1, name: 'Kit A' },
        { id: 2, name: 'Kit B' },
        { id: 3, name: 'Kit C' },
        { id: 4, name: 'Kit D' },
    ];

    return (
        <section className="py-10 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">System Kits</h2>
                <Dropdown label="Select a System Kit" options={kits.map(kit => kit.name)} />
            </div>
        </section>
    );
};

export default SystemKits;