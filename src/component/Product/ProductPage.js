import React from 'react'
import ProductDetails from './ProductDetails'
import Collections from "../home/Collections"
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function ProductPage() {
    return (
        <div className="product-detail-services_pg">
            <ErrorBoundary>
                <ProductDetails />
            </ErrorBoundary>
            <Collections />
        </div>
    )
}

export default ProductPage;