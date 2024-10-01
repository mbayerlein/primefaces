/*
 * The MIT License
 *
 * Copyright (c) 2009-2024 PrimeTek Informatics
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package org.primefaces.component.cache;

import org.primefaces.cache.CacheProvider;
import org.primefaces.context.PrimeApplicationContext;
import org.primefaces.context.PrimeRequestContext;
import org.primefaces.renderkit.CoreRenderer;

import java.io.IOException;
import java.io.StringWriter;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.context.ResponseWriter;

public class UICacheRenderer extends CoreRenderer {

    private static final Logger LOGGER = Logger.getLogger(UICacheRenderer.class.getName());

    @Override
    public void encodeChildren(FacesContext context, UIComponent component) throws IOException {
        UICache uiCache = (UICache) component;

        if (!uiCache.isDisabled()) {
            // print exception in development stage
            if (LOGGER.isLoggable(Level.WARNING)) {
                boolean moveScriptsToBottom = PrimeRequestContext.getCurrentInstance().getApplicationContext().getConfig().isMoveScriptsToBottom();
                if (moveScriptsToBottom) {
                    logDevelopmentWarning(context, this,
                            "Using p:cache in combination with PrimeFaces.MOVE_SCRIPTS_TO_BOTTOM may cause Javascript code to stop working.");
                }
            }

            ResponseWriter writer = context.getResponseWriter();
            CacheProvider cacheProvider = PrimeApplicationContext.getCurrentInstance(context).getCacheProvider();
            String key = uiCache.getKey();
            String region = uiCache.getRegion();

            if (key == null) {
                key = uiCache.getClientId(context);
            }

            if (region == null) {
                region = context.getViewRoot().getViewId();
            }

            String output = (String) cacheProvider.get(region, key);
            if (output == null) {
                StringWriter stringWriter = new StringWriter();
                ResponseWriter clonedWriter = writer.cloneWithWriter(stringWriter);
                context.setResponseWriter(clonedWriter);
                renderChildren(context, uiCache);

                output = stringWriter.getBuffer().toString();
                cacheProvider.put(region, key, output);
                context.setResponseWriter(writer);

                uiCache.setCacheSetInCurrentRequest(true);
            }

            writer.write(output);
        }
        else {
            renderChildren(context, uiCache);
        }
    }

    @Override
    public boolean getRendersChildren() {
        return true;
    }
}
