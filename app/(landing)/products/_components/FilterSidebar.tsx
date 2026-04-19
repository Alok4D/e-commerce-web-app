import { ChevronDown, ChevronUp } from "lucide-react";
import { Category } from "@/types/product";

interface FilterSidebarProps {
  categories: Category[];
  expandedFilters: string[];
  toggleFilter: (filter: string) => void;
}

const FilterSidebar = ({ categories, expandedFilters, toggleFilter }: FilterSidebarProps) => {
  const filterSections = [
    "PRICE",
    "DISPONIBILITÉ",
    "OCCASION",
    "MATIÈRE",
    "COULEUR",
    "STYLE",
    "ÂGE",
    "ORIGINE",
  ];

  return (
    <aside className="w-full lg:w-[280px] flex-shrink-0">
      <div className="border-b border-black pb-2 mb-6 flex justify-between items-center group cursor-pointer" 
           onClick={() => toggleFilter("FINDÉA COLLECTION")}>
        <h2 className="text-[16px] font-bold tracking-widest uppercase">FINDÉA COLLECTION</h2>
        {expandedFilters.includes("FINDÉA COLLECTION") ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
      </div>

      {expandedFilters.includes("FINDÉA COLLECTION") && (
        <ul className="space-y-4 mb-10">
          {categories.map((cat) => (
            <li key={cat.name} className="font-playfair">
              <div className="flex justify-between items-center group cursor-pointer"
                   onClick={() => cat.sub && toggleFilter(cat.name)}>
                <span className={`text-[15px] ${expandedFilters.includes(cat.name) ? 'font-bold' : 'text-gray-800'}`}>
                  {cat.name} ({cat.count})
                </span>
                {cat.sub && (
                  expandedFilters.includes(cat.name) ? <ChevronUp size={14}/> : <ChevronDown size={14}/>
                )}
              </div>
              {cat.sub && expandedFilters.includes(cat.name) && (
                <ul className="pl-4 mt-3 space-y-2">
                  {cat.sub.map(s => (
                    <li key={s} className="text-[14px] text-gray-600 hover:text-black cursor-pointer">{s}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Filter Sections */}
      <div className="space-y-6">
        {filterSections.map(section => (
          <div key={section} className="border-t border-gray-300 pt-6">
            <div className="flex justify-between items-center cursor-pointer group"
                 onClick={() => toggleFilter(section)}>
              <h3 className="text-[14px] font-bold tracking-widest uppercase">{section}</h3>
              {expandedFilters.includes(section) ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
            </div>
            {section === "PRICE" && expandedFilters.includes(section) && (
              <div className="mt-6">
                <div className="text-[14px] mb-4">Price: $50 - $500</div>
                <div className="h-[2px] bg-gray-200 relative">
                  <div className="absolute left-[20%] right-[40%] h-full bg-[#D4C3A3]"></div>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["10-25k", "25-50k", "50-100k", "100k+"].map(range => (
                    <button key={range} className="px-3 py-1 bg-[#DEDAD2] text-[12px] hover:bg-[#CFCAC1] transition-colors">
                      {range}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default FilterSidebar;
