import { CheckIcon } from "@heroicons/react/outline"
import { Product } from "@stripe/firestore-stripe-payments"

interface Props {
    products: Product[]
    selectedPlan: Product
}

function Table({ products, selectedPlan }: Props) {
  return (
    <table>
        <tbody className="divide-y divide-[grey]">
            <tr className="tableRow">
                <td className="tableDataTitle">Monthly Price</td>
                {products.map((product) => (
                    <td key={product.id} className={`tableDataFeature ${selectedPlan.id === product.id ? "text-[#e50914]":"text-[grey]"}`}>
                        ₹ {product.prices[0].unit_amount! / 100}
                        </td>
                ))} 
            </tr>

            <tr className="tableRow">
                <td className="tableDataTitle">Video Quality</td>
                {products.map((product) => (
                    <td key={product.id} className={`tableDataFeature ${selectedPlan.id === product.id ? "text-[#e50914]":"text-[grey]"}`}>
                        {product.metadata.videoQuality}
                    </td>
                ))}
            </tr>

            <tr className="tableRow">
                <td className="tableDataTitle">Resolution</td>
                {products.map((product) => (
                    <td 
                      className={`tableDataFeature ${selectedPlan.id === product.id ? "text-[#e50914]":"text-[grey]"}`} key={product.id}>
                        {product.metadata.resolution}
                    </td>
                ))}
            </tr>
            <tr className="tableRow">
                <td className="tableDataTitle">Watch on your TV, Computer, Mobile Phone and Tablet Devices.</td>
                {products.map((product) => (
                    <td
                     className={`tableDataFeature ${selectedPlan.id === product.id ? "text-[#e50914]":"text-[grey]"}`} key={product.id}>
                        {product.metadata.portability === 'true' && (<CheckIcon className="inline-block h-8 w-8" />
                        )}
                    </td>
                ))}
            </tr>

        </tbody>
    </table>
  )
}

export default Table